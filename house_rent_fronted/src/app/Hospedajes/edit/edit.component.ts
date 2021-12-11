import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { HospedajeService } from 'src/app/Service/hospedaje.service';
import { Hospedaje } from 'src/app/Modelo/Hospedaje';

@Component({
  selector: 'app-edit-hospedaje',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditHospedajeComponent implements OnInit {

  hospedaje :Hospedaje=new Hospedaje();
  constructor(private router:Router,private hospedajeService:HospedajeService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let idHospedaje=localStorage.getItem("idHospedaje");
    this.hospedajeService.getHospedajeId(+idHospedaje)
    .subscribe(data=>{
      this.hospedaje=data;
    })

  }
  Actualizar(hospedaje:Hospedaje){
    this.hospedajeService.updateHospedaje(hospedaje)
    .subscribe(data=>{
      this.hospedaje=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["Hospedajes/listar"]);
    })
  }

}
