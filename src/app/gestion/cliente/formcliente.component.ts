import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './formcliente.component.html',
  imports: [FormsModule],
  standalone: true
})
export class FormClienteComponent implements OnInit {

  titulo: string = "Crear cliente"
  clientes: Cliente[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService) { }

  public clienteForm: Cliente = {
    id: '',
    nombre: '',
    apellidos: '',
    fechaNacimiento: new Date(),
    direccion: '',
    correo: '',
    telefono: ''
  }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void {
    this.clientes = this.clienteService.getClientes();
    console.log("clientes:" + this.clientes.length);
  }

  agregarCliente() {
    console.log('id:' + this.clienteForm.id);
    this.clientes.push(this.clienteForm);
    this.clienteService.setClientes(this.clientes);
    this.router.navigate(['/clientes']);
    alert("Cliente creado exitosamente");
  }




}
