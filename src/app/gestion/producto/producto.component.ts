import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductoService } from './producto.service';
import { Producto } from './producto';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  constructor(private productoService : ProductoService) { }

  productos?: any[] = [];
  ngOnInit(): void {
    console.log('productos:'+this.productoService.getProductos().length);
    this.productos = this.productoService.getProductos();
  }


}
