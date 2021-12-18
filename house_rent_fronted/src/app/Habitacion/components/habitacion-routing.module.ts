import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHabitacionComponent } from '../add/add.component';
import { EditHabitacionComponent } from '../edit/edit.component';
import { ListarHabitacionComponent } from '../listar/listar.component';


const routes: Routes = [
  {
    path:'listar', 
    component:ListarHabitacionComponent
  },
  {
    path:'add',
    component:AddHabitacionComponent
  },
  {
    path:'edit',
    component:EditHabitacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitacionRoutingModule { }
