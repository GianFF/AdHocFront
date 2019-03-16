import {Observable, of} from "rxjs";
import {EscritoService} from "./escrito.service";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoriaEscritoService implements EscritoService {

  guardar(titulo: string, contenido: any, cliente: any, fechaDeCreacion: number): Observable<any> {
    return of({titulo: titulo, contenido: contenido, fechaDeCreacion: fechaDeCreacion, cliente: cliente});
  }

  editar(titulo: string, contenido: any, cliente: any, fechaDeCreacion: number, id: number): Observable<any> {
    return of({titulo: titulo, contenido: contenido, fechaDeCreacion: fechaDeCreacion, cliente: cliente, id: "number"});
  }

}
