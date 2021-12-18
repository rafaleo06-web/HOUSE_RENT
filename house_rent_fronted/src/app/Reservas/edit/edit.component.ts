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
  selector: 'app-edit-reservas',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditReservaComponent implements OnInit {

  reserva :Reserva=new Reserva();
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
    this.Editar();
    this.initDataClientes();
    this.initDataHospedajes();
    this.initDataHabitaciones();
  }

  Editar(){
    let idReserva=localStorage.getItem("idReserva");
    this.reservaService.getReservaId(+idReserva)
    .subscribe(data=>{
      this.reserva=data;
    })

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
  Actualizar(reserva:Reserva){
    this.reservaService.updateReserva(reserva)
    .subscribe(data=>{
      this.reserva=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["Reservas/listar"]);
    })
  }

}
