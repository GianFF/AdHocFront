import {Component, EventEmitter, Output} from '@angular/core';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
  @Output() cliente = new EventEmitter<Cliente>();

  model: Cliente = Cliente.nulo();

  constructor() {
  }

  guardar() {
    this.cliente.emit(this.model);
  }
}
