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

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header', { static: true }) header: ElementRef<HTMLDivElement>;

  nome = environment.nome;
  foto = environment.foto;

  constructor(public router: Router) {}

  ngOnInit() {
    // this.inicialAnimation();
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
    this.router.navigate(['/logar']);
    environment.token = '';
    environment.nome = '';
    environment.foto = '';
    environment.id = 0;
  }

  dropMenu(){
    let img = document.querySelector('img-profile')
    
  }

}