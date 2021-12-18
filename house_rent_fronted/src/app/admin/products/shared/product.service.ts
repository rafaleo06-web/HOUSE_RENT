import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiBase}/coffes`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/coffes/${id}`);
  }

  create(product: Product) {
    return this.http.post(`${this.apiBase}/coffes`, product);
  }

  update(product: Product) {
    return this.http.put(`${this.apiBase}/coffes`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/coffes/${id}`);
  }
}
