import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../home/material/material.module';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ClientesListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
