import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'coffes',
        component: ProductListComponent,
      },
      {
        path: 'coffe/new',
        component: NewProductComponent,
      },
      {
        path: 'coffe/:id/edit',
        component: EditProductComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent,
      },
      {
        path: 'order/nuevo',
        component: NewOrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
