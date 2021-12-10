import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'clientes_listado',
        component: ClientesListComponent,
      },
      // {
      //   path: 'coffe/new',
      //   component: NewProductComponent,
      // },
      // {
      //   path: 'coffe/:id/edit',
      //   component: EditProductComponent,
      // },
      // {
      //   path: 'orders',
      //   component: OrderListComponent,
      // },
      // {
      //   path: 'order/nuevo',
      //   component: NewOrderComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
