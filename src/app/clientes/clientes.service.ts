import { Injectable, LOCALE_ID, NgZone } from '@angular/core';
import { formatDate, DatePipe, registerLocaleData } from '@angular/common';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, Observable, throwError, Observer } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndPoint = 'http://localhost:8080/api/clientes';
  myData: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private zone: NgZone,
  ) { }

  getClientes(): Observable<any> {
    return new Observable(obs => {
      const source = this.getEventSource(this.urlEndPoint);

      source.onmessage = e => {
        const json = JSON.parse(e.data);
        this.zone.run(() => obs.next(json));
      };

    });
  }


  getEventSource(url: string): EventSource {
    return new EventSource(url);
  }
}

