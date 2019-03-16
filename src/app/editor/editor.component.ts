import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  client: any;
  crear: boolean;
  buscar: boolean;
  editor;
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.crear = false;
    this.buscar = false;
    this.editor = new Quill('#editor', {
      theme: 'snow'
    });
  }

  guardar(content) {
    if (isNullOrUndefined(this.client)) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
        .result
        .then((result) => { this.closeResult = `Closed with: ${result}`; }, () => {});
    }
  }

  crearCliente() {
    this.crear = !this.crear;
  }

  buscarCliente() {
    this.buscar = !this.buscar;
  }
}
