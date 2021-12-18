import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { HabitacionService } from 'src/app/Service/habitacion.service';

@Component({
  selector: 'app-add-habitacion',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddHabitacionComponent implements OnInit {

  habitacion:Habitacion=new Habitacion();
  constructor(
    private router:Router, 
    private habitacionService:HabitacionService
    ) { }

  ngOnInit() {
  }

  Guardar(){
    console.log(this.habitacion);
    this.habitacionService.createHabitacion(this.habitacion)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["Habitaciones/listar"]);
    })
  }

}
