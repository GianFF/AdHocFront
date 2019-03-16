import {Component, EventEmitter, Output} from '@angular/core';
import {Expediente} from '../../models/expediente';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent {
  @Output() expediente = new EventEmitter<Expediente>();

  model: Expediente = Expediente.nulo();

  constructor() {
  }

  guardar() {
    this.expediente.emit(this.model);
  }
}
