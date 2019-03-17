export class Expediente {

  static nulo() {
    return new Expediente('', '', '');
  }

  constructor(public materia: string,
              public actor: string,
              public demandado: string) {
  }
}
