import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormClienteComponent } from './cliente/formcliente.component';
import { FormComponent } from './producto/form.component';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormComponent,
    FormClienteComponent,
    ProductoComponent,
    ClienteComponent,
  ]
})
export class GestionModule { }
