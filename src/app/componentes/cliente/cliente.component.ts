import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';
import {WorkspaceService} from '../../services/workspace.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  model: Cliente;

  constructor(private service: ClienteService,
              private workspaceService: WorkspaceService) {
  }

  ngOnInit(): void {
    this.model = this.workspaceService.clienteActual() || Cliente.nulo();
    console.log(this.model);
  }

  guardar() {
    this.service.guardar(this.model);
  }
}
