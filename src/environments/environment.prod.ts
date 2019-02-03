import {HttpEscritoService} from "../services/http-escrito.service";

export const environment = {
  production: true,
  escritoService: HttpEscritoService,
  api: 'http://localhost:3000/api'
};
