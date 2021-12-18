import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { ListarComponent } from '../listar/listar.component';


const routes: Routes = [
  {
    path:'listar', 
    component:ListarComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'edit',
    component:EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
