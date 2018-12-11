import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {
  @Output() cliente = new EventEmitter<Cliente>();

  dataModel: string;
  dropdownOptions: Array<string>;
  config: any;

  constructor() { }

  ngOnInit() {
    this.dropdownOptions = ['Juan Carlos', 'Pedor Dario', 'Enrique Gustavo', 'Carlos Manuel', 'Locro Caca', 'Raul Roberto', 'Perez Natalia', 'Veronica Enriquez', 'Estebanez Lloron', 'Pedrito'];
    this.config = {
      search: true,
      limitTo: 3,
      placeholder: 'Seleccione para buscar un cliente...',
      noResultsFound: 'No se encontraron resultados',
      searchPlaceholder: 'Escriba para filtrar clientes...'
    };
  }

  selectionChanged($event: any) {
    this.cliente.emit($event.value[0]);
  }
}
