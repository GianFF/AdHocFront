import * as Quill from 'quill';
import {
  ABOGADA_APELLIDO,
  ABOGADA_DNI, ABOGADA_NOMBRE,
  ACTOR,
  CLIENTE_APELLIDO, CLIENTE_DNI,
  CLIENTE_NOMBRE,
  DEMANDADO,
  KEYWORDS,
  MATERIA
} from './keywords';
import {Cliente} from './cliente';
import {Expediente} from './expediente';

export class Editor {
  editor: Quill;

  constructor(editor) {
    this.editor = editor;
    this.agregarCombinacionDeTeclas({key: 's', ctrlKey: true}, 'strike');
  }


  llenarEsqueleto(cliente: Cliente, expediente: Expediente) {
    let contenido = this.editor.getText();
    KEYWORDS.forEach(palabraClave => {
      const regexp = new RegExp(palabraClave);
      const dato = this.getDato(palabraClave, cliente, expediente);
      contenido = contenido.replace( regexp, dato);
    });
    this.editor.setText(contenido);
  }

  contenido() {
    return this.editor.getContents();
  }

  setContenido(escrito: any) {
    this.editor.setContents(escrito);
  }


  private agregarCombinacionDeTeclas(combinacion, funcion) {
    this.editor.keyboard.addBinding(combinacion, function (range, context) {
      this.quill.formatText(range, funcion, true);
    });
  }

  private getDato(palabraClave: string, cliente: Cliente, expediente: Expediente) {
    let valor;

    if (palabraClave === MATERIA) {
      valor = expediente.materia;
    }
    if (palabraClave === ACTOR) {
      valor = expediente.actor;
    }
    if (palabraClave === DEMANDADO) {
      valor = expediente.demandado;
    }
    if (palabraClave === CLIENTE_NOMBRE) {
      valor = cliente.nombre;
    }
    if (palabraClave === CLIENTE_APELLIDO) {
      valor = cliente.apellido;
    }
    if (palabraClave === CLIENTE_DNI) {
      valor = 'DNI CLIENTE';
    }
    if (palabraClave === ABOGADA_NOMBRE) {
      valor = 'ABOGADA_NOMBRE';
    }
    if (palabraClave === ABOGADA_APELLIDO) {
      valor = 'ABOGADA_APELLIDO';
    }
    if (palabraClave === ABOGADA_DNI) {
      valor = 'ABOGADA_DNI';
    }
    // valor = DATOS_ABOGADA.find(dato_abogada => dato_abogada.palabraClave === palabraClave).valor;
    return valor;
  }
}
