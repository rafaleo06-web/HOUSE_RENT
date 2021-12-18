import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitacion } from '../Modelo/Habitacion';

@Injectable()
export class HabitacionService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/house_rent_api/v1/habitaciones';

  getHabitaciones(){
    return this.http.get<Habitacion[]>(this.Url);
  }
  createHabitacion(habitacion:Habitacion){
    return this.http.post<Habitacion>(this.Url,habitacion);
  }
  getHabitacionId(idhabitacion:number){
    return this.http.get<Habitacion>(this.Url+"/"+idhabitacion);
  }
  updateHabitacion(habitacion:Habitacion){
    return this.http.put<Habitacion>(this.Url,habitacion);
  }
  deleteHabitacion(habitacion:Habitacion){
    return this.http.delete<Habitacion>(this.Url+"/"+habitacion.idHabitacion);
  }
}