import { Injectable } from '@angular/core';
import {Expediente} from '../models/expediente';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  private cliente: Cliente;
  private expediente: Expediente;

  constructor() { }

  clienteActual(): Cliente {
    return this.cliente;
  }

  expedienteActual(): Expediente {
    return this.expediente;
  }

  setClienteActual(cliente: Cliente) {
    this.cliente = cliente;
  }

  setExpedienteActual(expediente: Expediente) {
    this.expediente = expediente;
  }
}
