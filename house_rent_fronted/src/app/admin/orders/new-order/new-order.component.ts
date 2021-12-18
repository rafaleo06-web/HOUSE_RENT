import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
})
export class NewOrderComponent implements OnInit {
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {}

  create(order: any) {
    this.orderService.create(order).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/orders']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
