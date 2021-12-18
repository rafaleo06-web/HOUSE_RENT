import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarHospedajeComponent } from '../listar/listar.component';
import { AddHospedajeComponent } from '../add/add.component';
import { EditHospedajeComponent } from '../edit/edit.component';
import { HospedajesRoutingModule } from './hospedajes-routing.module';

@NgModule({
  declarations: [
    ListarHospedajeComponent,
    AddHospedajeComponent,
    EditHospedajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HospedajesRoutingModule,
    ReactiveFormsModule
  ]
})
export class HospedajesModule { }
