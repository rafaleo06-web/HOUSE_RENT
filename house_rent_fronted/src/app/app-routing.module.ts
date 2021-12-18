import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarHospedajeComponent } from './Hospedajes/listar/listar.component';
import { AddHospedajeComponent } from './Hospedajes/add/add.component';
import { EditHospedajeComponent } from './Hospedajes/edit/edit.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  // {path:'Persona/listar', component:ListarComponent},
  // {path:'Persona/add',component:AddComponent},
  // {path:'Persona/edit',component:EditComponent},
  // {path:'Hospedaje/listar', component:ListarHospedajeComponent},
  // {path:'Hospedaje/add',component:AddHospedajeComponent},
  // {path:'Hospedaje/edit',component:EditHospedajeComponent}
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'clientes',
      //   pathMatch: 'full'
      // },
      {
        path: 'Clientes',
        loadChildren: () => import('./Persona/components/persona.module').then(m => m.PersonasModule)
      },
      {
        path: 'Hospedaje',
        loadChildren: () => import('./Hospedajes/components/hospedajes.module').then(m => m.HospedajesModule)
      },
      {
        path: 'Reservas',
        loadChildren: () => import('./Reservas/components/reservas.module').then(m => m.ReservasModule)
      },
      {
        path: 'Habitaciones',
        loadChildren: () => import('./Habitacion/components/habitacion.module').then(m => m.HabitacionModule)
      },
      // {
      //   path: '**',
      //   redirectTo: 'clientes',
      //   pathMatch: 'full'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
