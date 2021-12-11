import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospedaje } from '../Modelo/Hospedaje';

@Injectable()
export class HospedajeService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/house_rent_api/v1/hospedajes';

  getHospedajes(){
    return this.http.get<Hospedaje[]>(this.Url);
  }
  createHospedajes(hospedaje:Hospedaje){
    return this.http.post<Hospedaje>(this.Url,hospedaje);
  }
  getHospedajeId(idhospedaje:number){
    return this.http.get<Hospedaje>(this.Url+"/"+idhospedaje);
  }
  updateHospedaje(hospedaje:Hospedaje){
    return this.http.put<Hospedaje>(this.Url,hospedaje);
  }
  deleteHospedaje(hospedaje:Hospedaje){
    return this.http.delete<Hospedaje>(this.Url+"/"+hospedaje.idHospedaje);
  }
}