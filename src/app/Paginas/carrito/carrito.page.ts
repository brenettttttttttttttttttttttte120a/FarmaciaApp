import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  modalCtrl: any;
  close() {
    this.modalCtrl.dismiss();
  }


  constructor() { }

  ngOnInit() {
  }

}
