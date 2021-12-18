import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHospedajeComponent } from '../add/add.component';
import { EditHospedajeComponent } from '../edit/edit.component';
import { ListarHospedajeComponent } from '../listar/listar.component';


const routes: Routes = [
  {
    path:'listar', 
    component:ListarHospedajeComponent
  },
  {
    path:'add',
    component:AddHospedajeComponent
  },
  {
    path:'edit',
    component:EditHospedajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospedajesRoutingModule { }
