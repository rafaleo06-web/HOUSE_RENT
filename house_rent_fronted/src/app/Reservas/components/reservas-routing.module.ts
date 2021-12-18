import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReservaComponent } from '../add/add.component';
import { EditReservaComponent } from '../edit/edit.component';
import { ListarReservaComponent } from '../listar/listar.component';



const routes: Routes = [
  {
    path:'listar', 
    component:ListarReservaComponent
  },
  {
    path:'add',
    component:AddReservaComponent
  },
  {
    path:'edit',
    component:EditReservaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
