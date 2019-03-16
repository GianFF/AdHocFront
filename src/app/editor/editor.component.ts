import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Component, OnInit, Inject} from '@angular/core';
import {Cliente} from '../../models/cliente';
import * as Quill from 'quill';
import {EscritoService} from "../../services/escrito.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  cliente: Cliente = Cliente.nulo();
  crear: boolean;
  buscar: boolean;
  editor: Quill;
  private escrito;

  constructor(private modalService: NgbModal,
              @Inject('EscritoService') private escritoService: EscritoService) {
  }

  ngOnInit() {
    this.crear = false;
    this.buscar = false;

    var toolbarOptions = [
      [{ 'font': [] }],

      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
    ];

    this.editor = new Quill('#editor', {
      modules: {
        toolbar: [
          [{ 'font': [] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'align': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],

          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],

          [{ 'color': [] }, { 'background': [] }],

          ['clean']
        ]
      },
      theme: 'snow'
    });
  }

  guardar(contenido: string) {
    this.crear = this.buscar = false;

    if (this.cliente.esNulo()) {
      this.modalService.open(contenido, {ariaLabelledBy: 'modal-basic-title'});
    }else{
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

    var contenido = this.editor.getContents();

    if(isNullOrUndefined(this.escrito) || isNullOrUndefined(this.escrito.id)){
      this.escritoService.guardar("titulo", contenido, this.cliente, Date.now())
        .subscribe(data => {
          this.escrito = data;
        });
    }else{
      this.escritoService.editar("titulo", contenido, this.cliente, this.escrito.fechaDeCreacion, this.escrito.id)
        .subscribe(data => {
          this.escrito = data;
        });
    }
  }
}
