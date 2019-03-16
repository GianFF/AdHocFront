import {Observable} from 'rxjs';
import {EscritoService} from './escrito.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpEscritoService implements EscritoService {

  constructor(private http: HttpClient) {}

  guardar(titulo: string, contenido: any, cliente: any, fechaDeCreacion: number): Observable<any> {
    const url = environment.api + '/escritos';
    const body = {
      titulo: titulo,
      contenido: contenido,
      fechaDeCreacion: fechaDeCreacion,
      cliente: cliente
    };
    const options = {};

    return this.http.post(url, body, options);
  }

  editar(titulo: string, contenido: any, cliente: any, fechaDeCreacion: number, id: number): Observable<any> {
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
