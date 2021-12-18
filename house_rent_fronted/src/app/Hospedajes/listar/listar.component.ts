import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospedaje } from 'src/app/Modelo/Hospedaje';
import { HospedajeService } from 'src/app/Service/hospedaje.service';

@Component({
  selector: 'app-listar-hospedaje',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarHospedajeComponent implements OnInit {

  hospedajes: Hospedaje[];
  constructor(private hospedajeService: HospedajeService, private router: Router) { }

  ngOnInit() {
    this.hospedajeService.getHospedajes()
      .subscribe(data => {
        this.hospedajes = data;
        console.log(data);
      });
    }
  Editar(hospedajes:Hospedaje):void{
    localStorage.setItem("idHospedaje",hospedajes.idHospedaje.toString());
    this.router.navigate(["Hospedaje/edit"]);
  }

  Delete(hospedajes:Hospedaje){
    this.hospedajeService.deleteHospedaje(hospedajes)
    .subscribe(data=>{
      this.hospedajes=this.hospedajes.filter(p=>p!==hospedajes);
      alert("Hospedaje eliminado...");
    })
  }

  addHospedaje(){
    this.router.navigate(["/Hospedaje/add"]);
  }

}
