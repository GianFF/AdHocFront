import * as Quill from 'quill';
import {KEYWORDS} from './keywords';
import {DATOS_ABOGADA} from './constantes_abogada';

export class Editor {
  editor: Quill;

  constructor(editor) {
    this.editor = editor;
    this.agregarCombinacionDeTeclas({key: 's', ctrlKey: true}, 'strike');
  }


  llenarEsqueleto() {
    let contenido = this.editor.getText();
    KEYWORDS.forEach(palabraClave => {
      const regexp = new RegExp(palabraClave);
      const dato = DATOS_ABOGADA.find(dato_abogada => dato_abogada.palabraClave === palabraClave).valor;
      contenido = contenido.replace( regexp, dato);
    });
    this.editor.setText(contenido);
  }

  contenido() {
    return this.editor.getContents();
  }


  private agregarCombinacionDeTeclas(combinacion, funcion) {
    this.editor.keyboard.addBinding(combinacion, function (range, context) {
      this.quill.formatText(range, funcion, true);
    });
  }
}
