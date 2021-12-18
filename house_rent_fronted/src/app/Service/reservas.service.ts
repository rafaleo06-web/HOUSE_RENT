import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../Modelo/Reserva';

@Injectable()
export class ReservasService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/house_rent_api/v1/reservas';

  getReservas(){
    return this.http.get<Reserva[]>(this.Url);
  }
  createReservas(reserva:Reserva){
    return this.http.post<Reserva>(this.Url,reserva);
  }
  getReservaId(idreserva:number){
    return this.http.get<Reserva>(this.Url+"/"+idreserva);
  }
  updateReserva(reserva:Reserva){
    return this.http.put<Reserva>(this.Url,reserva);
  }
  deleteReserva(reserva:Reserva){
    return this.http.delete<Reserva>(this.Url+"/"+reserva.idReserva);
  }
}