import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createCoffe(product: Product) {
    this.productService.create(product).subscribe(
      () => {
        this.router.navigate(['admin/coffes']);
      },
      (error: any) => {}
    );
  }
}
