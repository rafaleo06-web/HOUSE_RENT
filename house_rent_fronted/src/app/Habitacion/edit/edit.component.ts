import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { HabitacionService } from 'src/app/Service/habitacion.service';

@Component({
  selector: 'app-edit-habitacion',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditHabitacionComponent implements OnInit {

  habitacion :Habitacion=new Habitacion();
  constructor(
    private router:Router,
    private habitacionService:HabitacionService
    ) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let idHabitacion=localStorage.getItem("idHabitacion");
    this.habitacionService.getHabitacionId(+idHabitacion)
    .subscribe(data=>{
      this.habitacion=data;
    })

  }
  Actualizar(habitacion:Habitacion){
    this.habitacionService.updateHabitacion(habitacion)
    .subscribe(data=>{
      this.habitacion=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["Habitaciones/listar"]);
    })
  }

}
