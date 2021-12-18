import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'acciones'];
  dataSource: MatTableDataSource<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllCoffes();
  }

  getAllCoffes() {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el café?');
    if (ok) {
      this.productService.delete(id).subscribe(() => {
        this.getAllCoffes();
      });
    }
  }
}
