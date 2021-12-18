import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/Modelo/Habitacion';
import { Hospedaje } from 'src/app/Modelo/Hospedaje';
import { Persona } from 'src/app/Modelo/Persona';
import { Reserva } from 'src/app/Modelo/Reserva';
import { HabitacionService } from 'src/app/Service/habitacion.service';
import { HospedajeService } from 'src/app/Service/hospedaje.service';
import { ReservasService } from 'src/app/Service/reservas.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-reservas',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddReservaComponent implements OnInit {

  reservas:Reserva=new Reserva();
  personas: Persona[];
  hospedajes: Hospedaje[];
  habitaciones: Habitacion[];

  constructor(
    private router:Router, 
    private reservaService:ReservasService,
    private clientesService:ServiceService,
    private hospedajeService:HospedajeService,
    private habitacionService:HabitacionService
    ) { }

  ngOnInit() {
    this.initDataClientes();
    this.initDataHospedajes();
    this.initDataHabitaciones();
  }

  initDataClientes(){
    this.clientesService.getPersonas()
      .subscribe(data => {
        this.personas = data;
        console.log(data);
      });
  }
  initDataHospedajes(){
    this.hospedajeService.getHospedajes()
      .subscribe(data => {
        this.hospedajes = data;
        console.log(data);
      });
  }
  initDataHabitaciones(){
    this.habitacionService.getHabitaciones()
      .subscribe(data => {
        this.habitaciones = data;
        console.log(data);
      });
  }

  Guardar(){
    console.log(this.reservas);
    this.reservaService.createReservas(this.reservas)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["Reservas/listar"]);
    })
  }

}
