import {Observable} from "rxjs";
import {EscritoService} from "./escrito.service";
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpEscritoService implements EscritoService {

  constructor(private http: HttpClient) {}

  guardar(titulo: string, contenido: any, fechaDeCreacion: number): Observable<any> {
    var url = environment.api + '/escritos';
    var body = {
      titulo: titulo,
      contenido: contenido,
      fechaDeCreacion: fechaDeCreacion
    };
    var options = {};

    return this.http.post(url, body, options);
  }
}
