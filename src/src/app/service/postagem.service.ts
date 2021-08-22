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
    return this.http.get<Postagem[]>('https://place2getterback.herokuapp.com/postagem')
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://place2getterback.herokuapp.com/postagem/buscar/${id}`)
  }



  getByTitulo(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://place2getterback.herokuapp.com/postagem/buscartitulo/${titulo}`)
  }

  getByDescricao(descricao: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://place2getterback.herokuapp.com/postagem/buscardescricao/${descricao}`)
  }

  getHashtag(hashtag: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://place2getterback.herokuapp.com/postagem/buscarhashtag/${hashtag}`)
  }
  
  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://place2getterback.herokuapp.com/postagem/novo', postagem)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://place2getterback.herokuapp.com/postagem/alterar', postagem)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://place2getterback.herokuapp.com/postagem/apagar/${id}`)
  }

  //curtir

  putCurtir(curtidas: number): Observable<Postagem>{
    return this.http.put<Postagem>(`https://place2getterback.herokuapp.com/postagem/curtidas/{curtidas}`, this.token)

  }
  //descurtir
  putDescurtir(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`https://place2getterback.herokuapp.com/postagem/descurtir/{descurtir}/${id}`, this.token)

  }


}
