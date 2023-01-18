import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ApiProductoService } from '../servicios/api-producto.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {


  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll;
  public data: any = []
  public results = [...this.data];

  constructor(
    public servicio: ApiProductoService
  ) { }

  ngOnInit() {
    this.servicio.obtenerPrimerosProductos();
    this.servicio.listaProducto$.subscribe(resp => {
      this.data = resp;
      this.results = this.data;
      console.log("estos datitos tengo:", this.data);
      if (this.scroll) {
        this.scroll.complete();
      }
    })
  }
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data;
    if (query && query.trim() != ' ') {
      this.results = this.results.filter((data: any) => {
        return (data.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1)||(data.categoria.toLowerCase().indexOf(query.toLowerCase()) > -1)||(data.marca.toLowerCase().indexOf(query.toLowerCase()) > -1);
      });
    }
  }




}
