import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit{
  constructor(private clienteService : ClienteService) { }
  clientes : Cliente[] = [];
  ngOnInit(): void {
    console.log('prueba');
    this.clientes = this.clienteService.getClientes();
  }

}
