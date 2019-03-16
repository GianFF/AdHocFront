import {isNullOrUndefined} from 'util';

export class Cliente {

  static nulo(): any {
    return new Cliente(null, null, 0);
  }

  constructor(public nombre: string,
              public apellido: string,
              public id: number) {
  }

  esNulo(): boolean {
    return isNullOrUndefined(this.nombre) && isNullOrUndefined(this.apellido) && this.id === 0;
  }

  nombreCompletoConId(): string {
    return this.nombre + ' ' + this.apellido + ' ' + this.id.toString();
  }

  nombreEs(nombreCompleto: string): boolean {
    return this.nombreCompletoConId() === nombreCompleto;
  }
}
