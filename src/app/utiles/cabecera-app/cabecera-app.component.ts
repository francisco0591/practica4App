import { Component, OnInit } from '@angular/core';
import { Producto } from '../../gestion/producto/producto';
import { ProductoService } from '../../gestion/producto/producto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabecera-app',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cabecera-app.component.html',
  styleUrl: './cabecera-app.component.css'
})
export class CabeceraAppComponent {


}
