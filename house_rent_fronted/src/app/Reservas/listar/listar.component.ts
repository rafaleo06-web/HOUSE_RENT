import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { Reserva } from 'src/app/Modelo/Reserva';
import { ReservasService } from 'src/app/Service/reservas.service';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarReservaComponent implements OnInit {

  reservas: Reserva[];
  personas: Persona[];
  constructor(private reservaService: ReservasService, private router: Router) { }

  ngOnInit() {
    this.reservaService.getReservas()
      .subscribe(data => {
        this.reservas = data;
        console.log(data);
      });
    }
  Editar(reservas:Reserva):void{
    localStorage.setItem("idReserva",reservas.idReserva.toString());
    this.router.navigate(["Reservas/edit"]);
  }

  Delete(reserva:Reserva){
    this.reservaService.deleteReserva(reserva)
    .subscribe(data=>{
      this.reservas=this.reservas.filter(p=>p!==reserva);
      alert("Reserva eliminada...");
    })
  }

  addReserva(){
    this.router.navigate(["/Reservas/add"]);
  }

}
