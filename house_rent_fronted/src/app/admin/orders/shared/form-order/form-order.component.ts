import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/admin/products/shared/product.model';
import { ProductService } from 'src/app/admin/products/shared/product.service';
import { OrderService } from '../order.service';

import { map } from 'rxjs/operators';
import { OrderItem } from '../../order-item.model';
import { Order } from '../../order.model';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
  form: FormGroup;
  productos: Product[];
  quantity: number;

  //autocomplete
  myControlProducto = new FormControl();
  productosFiltrados$: Observable<Product[]>;

  orderLines: OrderItem[] = [];

  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      producto: this.myControlProducto,
      quantity: new FormControl(),
    });

    this.listarProducts();

    this.productosFiltrados$ = this.myControlProducto.valueChanges.pipe(
      map((val) => this.filtrarProductos(val))
    );
  }

  listarProducts() {
    this.productService.getAllProducts().subscribe((data: any) => {
      console.log(data['body']);
      this.productos = data['body'];
    });
  }

  filtrarProductos(val: any) {
    if (val != null && val.id > 0) {
      return this.productos.filter((el) =>
        el.title.toLowerCase().includes(val.title.toLowerCase())
      );
    }

    return this.productos.filter((el) =>
      el.title.toLowerCase().includes(val?.toLowerCase())
    );
  }

  mostrarProducto(val: Product) {
    return val ? `${val.title}` : val;
  }

  agregarProducto() {
    if (this.form.value['producto']) {
      let orderLine = new OrderItem();
      orderLine.product = this.form.value['producto'];
      orderLine.quantity = this.form.value['quantity'];

      this.orderLines.push(orderLine);
    }
  }

  removerProducto(index: number) {
    this.orderLines.splice(index, 1);
  }
  save() {
    let order = new Order();
    order.items = this.orderLines;
    this.onSave.emit(order);
  }
}
