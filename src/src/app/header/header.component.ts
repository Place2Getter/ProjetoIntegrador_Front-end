import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,

} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header', { static: true }) header: ElementRef<HTMLDivElement>;
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPostagem: []
  tituloPost: string


  nome = environment.nome;
  foto = environment.foto;
  //teste editar usuario
  token = environment.token;
  id = environment.id;

  constructor(public router: Router ,
    private postagemService: PostagemService,
    ) {}

  ngOnInit() {
    // this.inicialAnimation();
    this.findByTituloPostagem()
  }

  // inicialAnimation(){
  //   gsap.from(this.header.nativeElement.childNodes, {
  //     duration: 0.8,
  //     opacity: 0,
  //     y: -30,
  //     stagger: 0.3,
  //     delay: 0.5,
  //   });
  // }

  sair() {
    this.router.navigate(['/home']);
    environment.token = '';
    environment.nome = '';
    environment.foto = '';
    environment.id = 0;
  }

  dropMenu(){
    let img = document.querySelector('img-profile')

  }

  findByTitulo(){
    this.postagemService.getByTitulo(this.postagem.titulo).subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByTituloPostagem(){

    if(this.tituloPost == ''){
      this.postagemService.getAllPostagem()
    } else{
      this.postagemService.getByTitulo(this.tituloPost).subscribe((resp: Postagem[]
        ) => {
      this.listaPostagens = resp
    })

    }

  }
}
