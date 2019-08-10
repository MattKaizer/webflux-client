import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

listaClientes = new Array<any>();

  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit() {
    this.getClientList();
  }


  getClientList() {
    return this.clienteService.getClientes().subscribe(data => {

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
