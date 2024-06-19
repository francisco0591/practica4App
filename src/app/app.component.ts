import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilesModule } from './utiles/utiles.module';
import { GestionModule } from './gestion/gestion.module';
import { PagoModule } from './pagos/pago.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UtilesModule,
    GestionModule,PagoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica3App';
}
