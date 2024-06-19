import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint: string = 'http://localhost:8086/api/cursos';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  // cursos: Curso[] = [];
  productos: Producto[] = [
    {
      id: 'p001',
      nombre: 'aceite',
      precio:5.00
    },
    {
      id: 'p002',
      nombre: 'atun',
      precio:3.50
    },
    {
      id: 'p003',
      nombre: 'yogurt',
      precio:7.00
    }

  ]

  constructor(private http: HttpClient) { }



  getProductos(): Producto[] {
    return this.productos;
  }

  setProductos(productos: Producto[]) {
    this.productos = productos;
  }

  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.urlEndPoint, producto, { headers: this.httpHeaders })
  }





}
