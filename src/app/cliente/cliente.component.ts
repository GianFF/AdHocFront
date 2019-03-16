import {Component, EventEmitter, Output} from '@angular/core';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  @Output() cliente = new EventEmitter<Cliente>();

  model: Cliente = Cliente.nulo();

  constructor() {
  }

  guardar() {
    this.cliente.emit(this.model);
  }
}
