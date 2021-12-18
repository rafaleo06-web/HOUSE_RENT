import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospedaje } from 'src/app/Modelo/Hospedaje';
import { HospedajeService } from 'src/app/Service/hospedaje.service';

@Component({
  selector: 'app-add-hospedaje',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddHospedajeComponent implements OnInit {

  hospedaje:Hospedaje=new Hospedaje();
  constructor(private router:Router, private hospedajeService:HospedajeService) { }

  ngOnInit() {
  }

  Guardar(){
    console.log(this.hospedaje);
    this.hospedajeService.createHospedajes(this.hospedaje)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["Hospedaje/listar"]);
    })
  }

}
