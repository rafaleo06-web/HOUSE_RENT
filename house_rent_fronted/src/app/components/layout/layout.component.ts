import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Clientes(){
      this.router.navigate(["/Clientes/listar"]);
    }
  Hospedajes(){
      this.router.navigate(["/Hospedaje/listar"]);
    }
  Reservas(){
    this.router.navigate(["/Reservas/listar"]);
  }
  Habitaciones(){
    this.router.navigate(["/Habitaciones/listar"]);
  }
}
