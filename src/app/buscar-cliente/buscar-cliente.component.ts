import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cliente} from '../../models/cliente';
import {CLIENTES} from '../../models/clientes-mock';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {
  @Output() cliente = new EventEmitter<Cliente>();

  clientes: Array<Cliente>;
  dataModel: string;
  dropdownOptions: Array<string>;
  config: any;

  constructor() {
  }

  ngOnInit() {
    // TODO: pedir los clientes a un servicio

    this.clientes = CLIENTES;
    this.dropdownOptions = this.clientes.map(cliente => {
      return cliente.nombreCompletoConId();
    });

    this.config = {
      search: true,
      limitTo: 3,
      placeholder: 'Seleccione para buscar un cliente...',
      noResultsFound: 'No se encontraron resultados',
      searchPlaceholder: 'Escriba para filtrar clientes...'
    };
  }

  selectionChanged($event: any) {
    const nombreDelCliente = $event.value[0];
    const clienteSeleccionado = this.clientes.find(cliente => cliente.nombreEs(nombreDelCliente));
    this.cliente.emit(clienteSeleccionado);
  }
}
