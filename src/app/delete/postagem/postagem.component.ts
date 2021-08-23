import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Postagem } from 'src/app/model/Postagem';
import { Usuario } from 'src/app/model/Usuario';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css'],
})
export class PostagemDeleteComponent implements OnInit {
  usuario: Usuario = new Usuario();
  postagem: Postagem = new Postagem();

  idPostagem: number;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) {}

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/logar']);
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Sua conexão inspirou!',
      });
    }

    this.idPostagem = this.route.snapshot.params['id'];
    this.findByIdPostagem(this.idPostagem);
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    });
  }

  apagar() {
    this.postagemService.deletePostagem(this.idPostagem).subscribe(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Postagem apagada com sucesso!'
      })
      this.router.navigate(['/inicio']);
    });
  }

  voltar(){
    this.router.navigate(['/inicio'])
  }
  
}
