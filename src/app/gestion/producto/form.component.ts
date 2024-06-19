import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [FormsModule],
  standalone: true
})
export class FormComponent implements OnInit {

  titulo: string = "Crear curso"
  productos: Producto[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService) { }

  public productoForm: Producto = {
    id: '',
    nombre: '',
    precio: 0
  }

  ngOnInit() {
    this.cargarProducto();
  }

  cargarProducto(): void {
    this.productos = this.productoService.getProductos();
    console.log("cursos:" + this.productos.length);
  }

  agregarProducto() {
    console.log('id:' + this.productoForm.id);
    this.productos.push(this.productoForm);
    this.productoService.setProductos(this.productos);
    this.router.navigate(['/productos']);
    alert("Producto creado exitosamente");
  }
}
