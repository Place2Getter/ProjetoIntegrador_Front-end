import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { 

  }

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://place2getter.herokuapp.com/usuarios/logar', usuarioLogin)
  }
  
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://place2getter.herokuapp.com/usuarios/cadastrar', usuario)
  }

  logado(){
    let logado: boolean = false;

    if(environment.token != ''){
      logado = true;
    }

    return logado;
  }
}
