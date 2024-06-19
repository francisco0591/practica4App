import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente : Cliente[] = [
    {
      id : 'c001',
      nombre : 'francisco',
      apellidos : 'julca',
      fechaNacimiento:new Date(1992,2,11),
      direccion:'av sn',
      correo:'fjulcav@gmail.com',
      telefono:'1232123'
  },
  {
    id : 'c002',
    nombre : 'juan',
    apellidos : 'sosa',
    fechaNacimiento:new Date(1990,7,12),
    direccion:'av sn',
    correo:'juan@gmail.com',
    telefono:'1232555'
},
{
  id : 'c003',
  nombre : 'Andrea',
  apellidos : 'Montes',
  fechaNacimiento:new Date(1995,6,10),
  direccion:'av sn',
  correo:'andrea@gmail.com',
  telefono:'1232777'
},

  ]
  constructor(private http: HttpClient) { }

  getClientes() : Cliente[]{
    return this.cliente;
  }

  setClientes(cliente : Cliente[]){
      this.cliente = cliente;
  }



}
