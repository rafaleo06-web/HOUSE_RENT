import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { HospedajeService } from './Service/hospedaje.service';
import { LayoutComponent } from './components/layout/layout.component';
import { ReservasService } from './Service/reservas.service';
import { HabitacionService } from './Service/habitacion.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceService,
    HospedajeService,
    ReservasService,
    HabitacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
