import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ServicioService } from '../servicios/servicio.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public formulario: FormGroup;

  constructor(public builder: FormBuilder,private alertController:AlertController,private servicio:ServicioService) {

  this.formulario = this.builder.group({
    usuario : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
    contraseña : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(4)]]



  })

  }

  values = '';
  onKey(value: string) {
  this.values += value + ' | ';
  }


  public ingresar (){
  this.servicio.nombreUsuario(this.values)










  }

  public campo (control: string){

    return this.formulario.get(control);

  }

  public campo3 (control: string){

    return this.formulario.get(control).touched;

  }

  public campo2 (control: string){

    return this.formulario.get(control).dirty;

  }
public iniciarsesion(){

  const alert =  this.alertController.create({
    header:'alerta',
    message:'sesion iniciada',
    buttons:['okey']


  })
}


  ngOnInit() {
  }




}

