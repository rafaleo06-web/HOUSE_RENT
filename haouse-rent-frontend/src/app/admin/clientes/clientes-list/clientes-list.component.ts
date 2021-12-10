import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from '../../clientes.service';
import { Clientes } from '../shared/clientes.model';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
})
export class ClientesListComponent implements OnInit {
  displayedColumns: string[] = ['id_cliente', 'apellidos', 'email','foto_perfil','nombres','telefono'];
  dataSource:MatTableDataSource<Clientes>;

  constructor(
    private clientesService: ClientesService
    ){}

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes() {
    this.clientesService.getClientes().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }
}