import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HOUSE RENT';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["Persona/listar"]);
  }
  Nuevo(){
    this.router.navigate(["Persona/add"]);
  }
}
