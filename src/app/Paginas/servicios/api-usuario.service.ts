import { Injectable } from '@angular/core';
import { Usuario, UsuarioConIdo } from '../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {

public url_usuario =  'http://localhost:3000/usuario';


// Tiene que ser notificada de un cambio
private comLista = new BehaviorSubject<Array<UsuarioConIdo>>([]);
// Emitir un observable para todos los componentes subcritos.
public listaUsuario$ = this.comLista.asObservable();

  constructor(
    private http:HttpClient
  ) {
  }

public agregarUsuario(usuario: Usuario){
    return this.http.post(this.url_usuario,usuario,{
      headers: {
        'Content-Type':'application/json;charset=utf-8'
      }
    })
  }
  public getUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url_usuario);
  }

  public idUsuario(id){
    localStorage.setItem('ID', id);
  }

  public retornarId(){
    return localStorage.getItem('ID');
  }




}

