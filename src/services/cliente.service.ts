import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Cliente} from '../models/cliente';
import {WorkspaceService} from './workspace.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient,
              private workspaceService: WorkspaceService) {}

  guardar(cliente: Cliente): Observable<Object> {
    this.workspaceService.setClienteActual(cliente);

    const url = environment.api + '/clientes';
    const body = {
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      fechaDeCreacion: Date.now(),
    };
    const options = {};

    return this.http.post(url, body, options);
  }

}
