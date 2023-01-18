
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductoId } from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {

  public  url_producto ='http://localhost:3000/producto';
  private comListaProd = new BehaviorSubject <Array<ProductoId>>([]);
  public listaProducto$ = this.comListaProd.asObservable();
  public paginaActualProducto = 1;
  constructor(private http:HttpClient) {

  }

  public obtenerPrimerosProductos(){
    this.http.get<ProductoId[]>(`${this.url_producto}?_page=1`).pipe()
    .subscribe(resp =>{
      this.paginaActualProducto = this.paginaActualProducto+1;
      this.comListaProd.next(resp);
    })
  }
}

