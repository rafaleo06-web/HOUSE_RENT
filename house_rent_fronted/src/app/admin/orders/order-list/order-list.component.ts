import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../order.model';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dateCreate', 'total'];
  dataSource: MatTableDataSource<Order>;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getOrders().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }
}
