import {Observable} from "rxjs";

export interface EscritoService {

  guardar(titulo: string, contenido: any, cliente: any, fechaDeCreacion: number): Observable<any>;

  editar(titulo: string, contenido: any, cliente: any, fechaDeCreacion: number, id: number): Observable<any>;

}
