import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../models/cliente';
import * as Quill from 'quill';

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

  constructor(private modalService: NgbModal) {
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
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      }
    });

    this.editor.keyboard.addBinding({ key: 's', ctrlKey: true }, function(range, context) {
      debugger;
      this.quill.formatText(range, 'strike', true);
    });
  }

  guardar(content) {
    this.crear = false;
    this.buscar = false;
    if (this.cliente.esNulo()) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
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
    this.cliente = cliente;
    this.modalService.dismissAll();
  }

  clienteGuardado(cliente: Cliente) {
    this.cliente = cliente;
    this.modalService.dismissAll();
  }
}
