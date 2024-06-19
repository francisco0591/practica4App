import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraAppComponent } from './cabecera-app/cabecera-app.component';
import { CarruselAppComponent } from './carrusel-app/carrusel-app.component';
import { PieAppComponent } from './pie-app/pie-app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CabeceraAppComponent,
    CarruselAppComponent,
    PieAppComponent
  ],
  exports: [
    CabeceraAppComponent,
    CarruselAppComponent,
    PieAppComponent
  ]
})
export class UtilesModule { }
