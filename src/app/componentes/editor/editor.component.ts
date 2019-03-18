import {Component, Input, OnInit} from '@angular/core';
import {Cliente} from '../../models/cliente';
import {EscritoService} from '../../services/escrito.service';
import {isNullOrUndefined} from 'util';
import {Editor} from '../../models/editor';
import * as Quill from 'quill';
import {Expediente} from '../../models/expediente';
import {WorkspaceService} from '../../services/workspace.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  cliente: Cliente;
  expediente: Expediente;
  editor: Editor;
  escrito: any;

  constructor(private escritoService: EscritoService,
              private workspaceService: WorkspaceService) {
  }

  ngOnInit() {
    this.editor = this.crearQuillEditor();
    this.cliente = this.workspaceService.clienteActual();
    this.expediente = this.workspaceService.expedienteActual();
    this.escrito = this.workspaceService.escritoActual();

    this.editor.setContenido(this.escrito);
  }

  llenarEsqueleto() {
    this.editor.llenarEsqueleto(this.cliente, this.expediente);
  }

  guardar() {
    if (isNullOrUndefined(this.escrito) || isNullOrUndefined(this.escrito.id)) {
      this.escritoService.guardar('titulo', this.editor.contenido(), this.cliente, Date.now())
        .subscribe(data => {
          this.escrito = data;
        });
    } else {
      this.escritoService.editar('titulo', this.editor.contenido(), this.cliente, this.escrito.fechaDeCreacion, this.escrito.id)
        .subscribe(data => {
          this.escrito = data;
        });
    }
  }

  private crearQuillEditor() {
    return new Editor(new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: [
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
        ]
      }
    }));
  }
}
