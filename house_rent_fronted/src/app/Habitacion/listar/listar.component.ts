import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { HabitacionService } from 'src/app/Service/habitacion.service';

@Component({
  selector: 'app-listar-habitacion',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarHabitacionComponent implements OnInit {

  habitaciones: Habitacion[];
  constructor(
    private habitacionService: HabitacionService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.habitacionService.getHabitaciones()
      .subscribe(data => {
        this.habitaciones = data;
        console.log(data);
      });
    }
  Editar(habitaciones:Habitacion):void{
    localStorage.setItem("idHabitacion",habitaciones.idHabitacion.toString());
    this.router.navigate(["Habitaciones/edit"]);
  }

  Delete(habitacion:Habitacion){
    this.habitacionService.deleteHabitacion(habitacion)
    .subscribe(data=>{
      this.habitaciones=this.habitaciones.filter(p=>p!==habitacion);
      alert("Habitacion eliminada...");
    })
  }

  addHabitacion(){
    this.router.navigate(["/Habitaciones/add"]);
  }

}
