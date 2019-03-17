import {Component, EventEmitter, Output} from '@angular/core';
import {Expediente} from '../../models/expediente';
import {ExpedienteService} from '../../services/expediente.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent {
  @Output() expediente = new EventEmitter<Expediente>();

  model: Expediente = Expediente.nulo();

  constructor(private service: ExpedienteService) {
  }

  guardar() {
    this.service.guardar(this.model);
  }
}
