import {Component, OnInit} from '@angular/core';
import {Expediente} from '../../models/expediente';
import {ExpedienteService} from '../../services/expediente.service';
import {WorkspaceService} from '../../services/workspace.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {
  model: Expediente;

  constructor(private service: ExpedienteService,
              private workspaceService: WorkspaceService) {
  }

  ngOnInit(): void {
    this.model = this.workspaceService.expedienteActual() || Expediente.nulo();
    console.log(this.model);
  }

  guardar() {
    this.service.guardar(this.model);
  }
}
