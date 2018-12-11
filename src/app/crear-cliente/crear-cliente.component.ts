import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  @Output() cliente = new EventEmitter<Cliente>();

  nombre = '';
  apellido = '';
  model = new Cliente('', '');

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.model);

    this.cliente.emit(this.model);

    this.cliente.emit(new Cliente(this.nombre, this.apellido));
  }
}
