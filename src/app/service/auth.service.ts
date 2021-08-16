import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { ok } from 'assert';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {

  }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://place2getterbackend.herokuapp.com/usuarios/${id}`)
  }

  getAllUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://place2getterbackend.herokuapp.com/usuarios/mostrar')
  }
  
  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://place2getterbackend.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://place2getterbackend.herokuapp.com/usuarios/cadastrar', usuario)
  }
  
  logado(){
    let logado: boolean = false;

    if(environment.token != ''){
      logado = true;
    }
    return logado
  }

  mentor(){
    let ok: boolean = false

    if(environment.tipo == "mentor"){
    ok = true
    }
    return ok
  }
}
