import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/house_rent_api/v1/clientes';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(cliente:Persona){
    return this.http.post<Persona>(this.Url,cliente);
  }
  getPersonaId(idCliente:number){
    return this.http.get<Persona>(this.Url+"/"+idCliente);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.idCliente);
  }
}
