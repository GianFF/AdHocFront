import {Component, EventEmitter, Output} from '@angular/core';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  @Output() cliente = new EventEmitter<Cliente>();

  model: Cliente = Cliente.nulo();

  constructor(private service: ClienteService) {
  }

  guardar() {
    this.service.guardar(this.model);
  }
}
