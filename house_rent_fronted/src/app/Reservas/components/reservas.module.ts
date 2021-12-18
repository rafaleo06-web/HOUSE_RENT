import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservasRoutingModule } from './reservas-routing.module';
import { ListarReservaComponent } from '../listar/listar.component';
import { AddReservaComponent } from '../add/add.component';
import { EditReservaComponent } from '../edit/edit.component';

@NgModule({
  declarations: [
    ListarReservaComponent,
    AddReservaComponent,
    EditReservaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReservasRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservasModule { }
