import { Observer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit() {

    this.clienteService.getClientes().subscribe(
      objs => {
        // this.clienteService.listaClientes.push(objs);
        console.log(objs);
      }
    );
  }

}
