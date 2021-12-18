import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonasRoutingModule } from './persona-routing.module';
import { ListarComponent } from '../listar/listar.component';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';

@NgModule({
  declarations: [
    ListarComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonasRoutingModule,
    ReactiveFormsModule
  ]
})
export class PersonasModule { }
