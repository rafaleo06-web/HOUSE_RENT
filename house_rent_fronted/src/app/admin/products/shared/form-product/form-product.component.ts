import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  @Input() product: Product = new Product();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        this.product.title,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      description: [this.product.description, [Validators.required]],
      price: [this.product.price, [Validators.required, Validators.min(1)]],
    });
  }

  save() {
    this.onSubmit.emit(this.form.value);
  }
}
