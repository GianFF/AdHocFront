import { Injectable } from '@angular/core';
import {Expediente} from '../models/expediente';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  private cliente: Cliente;
  private expediente: Expediente;
  private escrito: any;

  constructor() { }

  clienteActual(): Cliente {
    return this.cliente;
  }

  expedienteActual(): Expediente {
    return this.expediente;
  }

  escritoActual(): Expediente {
    return this.escrito;
  }

  setClienteActual(cliente: Cliente) {
    this.cliente = cliente;
  }

  setExpedienteActual(expediente: Expediente) {
    this.expediente = expediente;
  }

  setEscritoActual(escrito: any) {
    this.escrito = escrito;
  }
}
