import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../gestion/producto/producto.service';
import { Producto } from '../../gestion/producto/producto';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Cliente } from '../../gestion/cliente/cliente';
import { ClienteService } from '../../gestion/cliente/cliente.service';

@Component({
  selector: 'app-formmatricula',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './registro-pago.component.html',
  styleUrl: './registro-pago.component.css'
})
export class RegistroPagoComponent implements OnInit {
  productos?: any[] = [];
  seleccionarClie: string = "";
  seleccionarProd: string = "";
  clientes : Cliente[] = [];
  precio : number = 0;
  cantidad : number  = 0 ;
  monto : number  = 0;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,
    private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
    this.clientes = this.clienteService.getClientes();

    console.log('productos:'+this.productos?.length)

  }

  seleccionarProducto(producto : any){
    this.precio=producto.target.value;
    console.log('cliente:'+producto.target.value)
  }

  siguiente() {
    this.router.navigate(['/pagos/registrar-pago']);
    console.log("cliente:"+this.seleccionarClie);
    if(this.seleccionarClie == ''){
      alert('seleccionar cliente');
    }else if(this.seleccionarProd == ''){
      alert('seleccionar producto');
    }else{
      let pago = this.cantidad * this.precio;
      alert("pago realizado correctamente , monto: "+pago+" soles");
    }
  }
}
