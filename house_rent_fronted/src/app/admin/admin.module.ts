import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { FormProductComponent } from './products/shared/form-product/form-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { FormOrderComponent } from './orders/shared/form-order/form-order.component';

@NgModule({
  declarations: [
    NewProductComponent,
    ProductListComponent,
    EditProductComponent,
    LayoutComponent,
    FormProductComponent,
    NewOrderComponent,
    OrderListComponent,
    FormOrderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
