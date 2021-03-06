import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertaService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  tituloPostagem: [];
  hashtagPost: string;
  listaHashtag: Postagem[];

  //variavel de pesquisa tema
  nomeTema: string;

  //pesquisas
  tituloPost: string;
  descricaoPostagem: string;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;

  usuario: Usuario = new Usuario();
  idUsuario = environment.id;
  tipoUsuario = environment.tipo;
  foto = environment.foto;
  nomeUsuario = environment.nome;
  listaUsuarios: Usuario[];
  id = environment.id;

  //ordem de postagem
  key = 'data';
  reverse = true;
  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    public sanitizer: DomSanitizer,
    //criação do alerta
    private alertas: AlertaService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      this.router.navigate(['/logar']);
      Toast.fire({
        icon: 'info',
        title: 'Sua conexão expirou!',
      });
    }
    this.getAllTemas();
    this.getAllPostagens();
    this.findByIdUsuario();
    this.findAllUsuarios();
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  getAllPostagens() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  findByIdUsuario() {
    this.authService
      .getByIdUsuario(this.idUsuario)
      .subscribe((resp: Usuario) => {
        this.usuario = resp;
      });
  }

  findAllUsuarios() {
    this.authService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.usuario.id = this.idUsuario;
    this.postagem.usuario = this.usuario;

    this.postagemService.postPostagem(this.postagem).subscribe(
      (resp: Postagem) => {
        this.postagem = resp;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Mentoria registrada!',
        });
        this.postagem = new Postagem();
        this.getAllPostagens();
        this.findByIdUsuario();
        this.verificacaoPerfil();
      },
      (erro) => {
        if (erro.status == 500) {
          Swal.fire({
            icon: 'error',
            timer: 3000,
            text: 'Algum dado não foi preenchido corretamente!',
          });
          this.postagem = new Postagem();
        }
      }
    );
  }

  findByTituloPostagem() {
    if (this.tituloPost == '') {
      this.getAllPostagens();
    } else {
      this.postagemService
        .getByTitulo(this.tituloPost)
        .subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp;
        });
    }
  }

  findByDescricao() {
    if (this.descricaoPostagem == '') {
      this.getAllPostagens();
    } else {
      this.postagemService
        .getByDescricao(this.descricaoPostagem)
        .subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp;
        });
    }
  }

  findByNomeTema() {
    if (this.nomeTema == '') {
      this.getAllPostagens();
    } else {
      this.temaService
        .getByNomeTema(this.nomeTema)
        .subscribe((resp: Tema[]) => {
          this.listaTemas = resp;
        });
    }
  }

  findByHashtag() {
    if (this.hashtagPost == '') {
      this.getAllPostagens();
    } else {
      this.postagemService
        .getHashtag(this.hashtagPost)
        .subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp;
        });
    }
  }

  verificacaoPerfil() {
    let permissao: boolean = false;

    if (environment.tipo == 'mentor') {
      permissao = true;
    }
    return permissao;
  }

  alertaImplementacaoFutura() {
    Swal.fire({
      icon: 'info',
      title: 'Place2Getter',
      text: 'Essa opção fará parte de implementações futuras!',
    });
  }

  getByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    });
  }

  // curtida(id: number) {
  //   this.postagemService.putCurtir(id).subscribe(() => {
  //     this.getAllPostagens();
  //   });
  // }

  // descurtida(id: number) {
  //   this.postagemService.putDescurtir(id).subscribe(() => {
  //     this.getAllPostagens();
  //   });
  // }
}
