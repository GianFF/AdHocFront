import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WorkspaceService} from './workspace.service';

@Injectable({
  providedIn: 'root'
})
export class EscritoService {

  constructor(private http: HttpClient,
              private workspaceService: WorkspaceService) {}

  guardar(titulo: string, contenido: any, cliente: any, fechaDeCreacion: number): Observable<any> {
    this.workspaceService.setEscritoActual(contenido);

    const url = environment.api + '/escritos';
    const body = {
      titulo: titulo,
      contenido: contenido,
      cliente: cliente,
      fechaDeCreacion: fechaDeCreacion
    };
    const options = {};

    return this.http.post(url, body, options);
  }

  editar(titulo: string, contenido: any, cliente: any, fechaDeCreacion: number, id: number): Observable<any> {
    this.workspaceService.setEscritoActual(contenido);

    const url = environment.api + '/escritos';
    const body = {
      titulo: titulo,
      contenido: contenido,
      cliente: cliente,
      fechaDeCreacion: fechaDeCreacion,
      id: id
    };
    const options = {};

    return this.http.put(url, body, options);
  }
}
