import { Routes } from '@angular/router';
import { CarruselAppComponent } from './utiles/carrusel-app/carrusel-app.component';
import { ClienteComponent } from './gestion/cliente/cliente.component';
import { FormClienteComponent } from './gestion/cliente/formcliente.component';
import { ProductoComponent } from './gestion/producto/producto.component';
import { FormComponent } from './gestion/producto/form.component';
import { RegistroPagoComponent } from './pagos/registro/registro-pago.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CarruselAppComponent },
  { path: 'productos', component: ProductoComponent },
  {path: 'productos/form', component: FormComponent},
  {path: 'productos/form/:id', component: FormComponent},
  { path: 'clientes', component: ClienteComponent },
  {path: 'clientes/form', component: FormClienteComponent},
  {path: 'clientes/form/:id', component: FormClienteComponent},
  { path: 'pagos', component: RegistroPagoComponent },
  {path: 'pagos/registrar-pago', component: RegistroPagoComponent}
];
