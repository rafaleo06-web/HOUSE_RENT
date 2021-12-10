import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
//import { environment } from 'src/environments/environment';
import { Clientes } from './clientes/shared/clientes.model';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get<Clientes[]>(`${this.apiBase}/clientes`);
  }

  create(order: Clientes) {
    return this.http.post(`${this.apiBase}/clientes`, order);
  }
}
