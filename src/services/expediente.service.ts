import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Expediente} from '../models/expediente';
import {WorkspaceService} from './workspace.service';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {

  constructor(private http: HttpClient,
              private workspaceService: WorkspaceService) {}

  guardar(expediente: Expediente): Observable<Object> {
    this.workspaceService.setExpedienteActual(expediente);

    const url = environment.api + '/expedientes';
    const body = {
      actor: expediente.actor,
      demandado: expediente.demandado,
      materia: expediente.materia,
      fechaDeCreacion: Date.now(),
    };
    const options = {};

    return this.http.post(url, body, options);
  }
}
