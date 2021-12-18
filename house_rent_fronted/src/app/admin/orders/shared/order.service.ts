import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Order[]>(`${this.apiBase}/orders`);
  }

  create(order: Order) {
    return this.http.post(`${this.apiBase}/orders`, order);
  }
}
