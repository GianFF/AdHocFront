import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';
import { isNullOrUndefined } from 'util';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  cliente: any;
  crear: boolean;
  buscar: boolean;
  editor;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.crear = false;
    this.buscar = false;
    this.editor = new Quill('#editor', {
      theme: 'snow'
    });
  }

  guardar(content) {
    this.crear = false;
    this.buscar = false;
    if (isNullOrUndefined(this.cliente)) {
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
