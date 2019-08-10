import { Observer, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  // listaClientes: Observable<Array<String>>;
  listaClientes = new Array<any>();
  cli: any;
  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit() {
    this.getClientList();
  }

  ngOnDestroy(): void {
    this.getClientList().unsubscribe();
  }

  getClientList() {
    return this.clienteService.getClientes().subscribe(data => {
      // this.listaClientes = new Array<Cliente>();
      // this.listaClientes = [];

      const clientIndex: number = this.listaClientes.findIndex((cliente: any) => cliente.id === data.id);
      if (clientIndex >= 0) {
        this.listaClientes[clientIndex] = data;
      } else {
        this.listaClientes.push(data);
      }




      console.log(this.listaClientes);
    });
  }

}
