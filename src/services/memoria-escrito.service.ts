import {Observable, of} from "rxjs";
import {EscritoService} from "./escrito.service";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoriaEscritoService implements EscritoService {

  guardar(titulo: string, contenido: any, fechaDeCreacion: number): Observable<any> {
    return of({titulo: "string", contenido: "contenido", fechaDeCreacion: "number"});
  }

}
