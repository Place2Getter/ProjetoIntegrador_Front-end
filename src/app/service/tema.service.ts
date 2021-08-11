import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://place2getterteste.herokuapp.com/tema')
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://place2getterteste.herokuapp.com/tema/${id}`)
  }

  getByNomeTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://place2getterteste.herokuapp.com/tema/buscardescricao/${descricao}`)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://place2getterteste.herokuapp.com/tema/novo', tema)

  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://place2getter.herokuapp.com/tema/alterar', tema)
  }

  deleteTema(id: number){
    return this.http.delete(`https://place2getter.herokuapp.com/tema/apagar/${id}`)
  }
}
