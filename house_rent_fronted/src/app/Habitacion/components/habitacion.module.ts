import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HabitacionRoutingModule } from './habitacion-routing.module';
import { AddHabitacionComponent } from '../add/add.component';
import { EditHabitacionComponent } from '../edit/edit.component';
import { ListarHabitacionComponent } from '../listar/listar.component';

@NgModule({
  declarations: [
    ListarHabitacionComponent,
    AddHabitacionComponent,
    EditHabitacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HabitacionRoutingModule,
    ReactiveFormsModule
  ]
})
export class HabitacionModule { }
