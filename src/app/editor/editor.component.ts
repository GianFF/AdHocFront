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
  editor;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.crear = false;
    this.buscar = false;
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

  guardar(content) {
    this.crear = false;
    this.buscar = false;
    if (this.cliente.esNulo()) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }
  }

  crearCliente() {
    this.crear = !this.crear;
    this.buscar = false;
  }

  buscarCliente() {
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
