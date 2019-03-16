import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Component, Inject, OnInit} from '@angular/core';
import {Cliente} from '../../models/cliente';
import {EscritoService} from '../../services/escrito.service';
import {isNullOrUndefined} from 'util';
import {Editor} from '../../models/editor';
import * as Quill from 'quill';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  cliente: Cliente = Cliente.nulo();
  crear: boolean;
  buscar: boolean;
  editor: Editor;
  private escrito;

  constructor(@Inject('EscritoService') private escritoService: EscritoService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.crear = false;
    this.buscar = false;

    this.editor = this.crearQuillEditor();
  }

  llenarEsqueleto() {
    this.editor.llenarEsqueleto();
  }

  guardar(contenido: string) {
    this.crear = this.buscar = false;

    if (this.cliente.esNulo()) {
      this.modalService.open(contenido, {ariaLabelledBy: 'modal-basic-title'});
    } else {
      this.guardarEscrito(this.cliente);
    }
  }

  abrirCrearCliente() {
    this.crear = !this.crear;
    this.buscar = false;
  }

  abrirBuscarCliente() {
    this.buscar = !this.buscar;
    this.crear = false;
  }

  clienteEncontrado(cliente: Cliente) {
    this.guardarEscrito(cliente);
  }

  clienteGuardado(cliente: Cliente) {
    this.guardarEscrito(cliente);
  }


  private guardarEscrito(cliente: Cliente) {
    this.cliente = cliente;
    this.modalService.dismissAll();

    const contenido = this.editor.contenido();

    if (isNullOrUndefined(this.escrito) || isNullOrUndefined(this.escrito.id)) {
      this.escritoService.guardar('titulo', contenido, this.cliente, Date.now())
        .subscribe(data => {
          this.escrito = data;
        });
    } else {
      this.escritoService.editar('titulo', contenido, this.cliente, this.escrito.fechaDeCreacion, this.escrito.id)
        .subscribe(data => {
          this.escrito = data;
        });
    }
  }

  private crearQuillEditor() {
    return new Editor(new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: this.barraDeHerramientas()
      }
    }));
  }

  private barraDeHerramientas() {
    return [
      [{'font': []}],

      ['bold', 'italic', 'underline', 'strike'],      // toggled buttons
      ['blockquote', 'code-block'],

      [{'header': 1}, {'header': 2}],                 // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],       // superscript/subscript
      [{'indent': '-1'}, {'indent': '+1'}],           // outdent/indent
      [{'direction': 'rtl'}],                         // text direction

      [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],

      [{'color': []}, {'background': []}],            // dropdown with defaults from theme
      [{'align': []}],

      ['clean']                                       // remove formatting button
    ];
  }
}
