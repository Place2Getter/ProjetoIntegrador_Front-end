import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://place2getterbackend.herokuapp.com/postagem')
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://place2getterbackend.herokuapp.com/postagem/${id}`)
  }



  getByTitulo(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://place2getterbackend.herokuapp.com/postagem/buscardescricao/${titulo}`)
  }

  getByDescricao(descricao: string): Observable<Postagem>{
    return this.http.get<Postagem>(`https://place2getterbackend.herokuapp.com/postagem/buscardescricao/${descricao}`)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://place2getterbackend.herokuapp.com/postagem/novo', postagem)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://place2getterbackend.herokuapp.com/postagem/alterar', postagem)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://place2getterbackend.herokuapp.com/postagem/apagar/${id}`)
  }


}
