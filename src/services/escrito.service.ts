import {Observable} from "rxjs";

export interface EscritoService {

  guardar(titulo: string, contenido: any, fechaDeCreacion: number): Observable<any>;

}
