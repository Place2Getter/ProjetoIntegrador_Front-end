import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('banner', { static:  true }) banner: ElementRef<HTMLDivElement>;
  @ViewChild('divisorBanner', { static: true }) divisorBanner: ElementRef<HTMLDivElement>
  @ViewChild('circleBanner', { static: true }) circleBanner: ElementRef<HTMLDivElement>

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.initScrollAnimation();
    this.inicialAnimation();
  }

  initScrollAnimation(): void{
    gsap.to(this.document.querySelector('.descricaoBanner'),{
      scrollTrigger: {
        trigger: this.document.querySelector('.descricaoBanner'),
        scrub: true, 
        start: '150% center',
      },
      color: '#ffffff00', 
      duration: 0.2,
      y: -90
    });
    gsap.to(this.document.querySelector('.textoBanner'),{
      scrollTrigger: {
        trigger: this.document.querySelector('.textoBanner'),
        scrub: true, 
        start: '150% center',
      },
      color: '#ffffff00', 
      duration: 0.2,
      y: -90
    });
    gsap.to(this.document.querySelector('.banner'),{
      scrollTrigger: {
        trigger: this.document.querySelector('.banner'),
        scrub: true, 
        start: '10% top',
      },
      duration: 0.5,
      opacity: 0.75
    });
    gsap.to(this.document.querySelector('.bolha-persona-1'),{
      scrollTrigger: {
        trigger: this.document.querySelector('.bolha-persona-1'),
        scrub: true,
        start: '100% center',
      },
      y: -90,
      duration: 0.8,
      delay: 8,
    });
    
  }

  inicialAnimation(): void{
    gsap.from(this.banner.nativeElement.childNodes, {
      duration: 1.8,
      opacity: 0,
      x: -200,
      stagger: 0.35,
      delay: 0.15,
    });
    gsap.from(this.document.querySelector('.square'), {
      duration: 1.5,
      opacity: 0,
      stagger: 1,
      width: 2000
    });
    gsap.from(this.document.querySelector('.circleBanner'), {
      duration: 8,
      opacity: 0,
      stagger: 1,
    });
    
    gsap.from(this.document.querySelector('.bolha-persona-1'),{
      scrollTrigger: {
        trigger: this.document.querySelector('.bolha-persona-1'),
        scrub: true,
        start: '50% center',
      },
      opacity: 0
    });
    
    gsap.from(this.document.querySelector('.texto-persona'),{
      scrollTrigger: {
        trigger: this.document.querySelector('.texto-persona'),
        scrub: true,
        start: '1% center',
      },
      y: -100,
      duration: 2.5,
      opacity: 0
    });
  }
}
