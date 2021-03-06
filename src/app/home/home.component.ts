import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import gsapCore from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { environment } from 'src/environments/environment.prod';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('banner', { static: true }) banner: ElementRef<HTMLDivElement>;
  @ViewChild('divisorBanner', { static: true })
  divisorBanner: ElementRef<HTMLDivElement>;
  @ViewChild('circleBanner', { static: true })
  circleBanner: ElementRef<HTMLDivElement>;
  @ViewChild('header', { static: true }) header: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    window.scroll(0,0)

    this.initScrollAnimation();
    this.inicialAnimation();
    environment.token = '';
  }

  initScrollAnimation() {
    gsap.to('.header, .logo, .links, .register', {
      opacity: 0,
      duration: 5,
      delay: 5,
      scrollTrigger: {
        trigger: '.header',
        scrub: true,
        start: '-10% -10%',
        end: '-150% -150%',
      },
    });

    gsap.to(this.document.querySelector('.descricaoBanner'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.descricaoBanner'),
        scrub: true,
        start: '150% center',
      },
      color: '#ffffff00',
      duration: 0.2,
      y: -90,
      opacity: 0
    });

    gsap.to(this.document.querySelector('.textoBanner'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.textoBanner'),
        scrub: true,
        start: '150% center',
      },
      color: '#ffffff00',
      duration: 0.2,
      y: -90,
      opacity: 0
    });

    gsap.to(this.document.querySelector('.banner'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.banner'),
        scrub: true,
        start: '10% top',
      },
      opacity: 0.95,
    });

    gsap.to(this.document.querySelector('.bolha-persona-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.bolha-persona-1'),
        scrub: true,
        start: '130% center',
      },
      y: 50,
      duration: 0.8,
      delay: 8,
    });

    gsap.from(this.document.querySelector('.titulo-mentoria'), {
      scrollTrigger: {
        trigger: '.titulo-mentoria',
        // toggleActions: 'restart pause reverese pause',
      },
      x: -150,
      duration: 2,
      opacity: 0,
    });

    gsap.from(this.document.querySelector('.texto-mentoria'), {
      scrollTrigger: {
        trigger: '.texto-mentoria',
        // toggleActions: 'restart pause reverese pause',
      },
      x: -150,
      duration: 2,
      opacity: 0,
    });
  }

  inicialAnimation(): void {
    gsap.from(this.header.nativeElement.childNodes, {
      duration: 0.8,
      opacity: 0,
      y: -30,
      stagger: 0.5,
      delay: 1.5,
      ease: 'slow',
    });

    gsap.from(this.banner.nativeElement.childNodes, {
      duration: 1.8,
      opacity: 0,
      x: -200,
      stagger: 0.35,
      delay: 0.15,
      scrub: true,
      ease: "bouce"
    });


    gsap.from(this.document.querySelector('.square'), {
      duration: 1.8,
      opacity: 0,
      stagger: 1,
      width: 2000,
      ease: 'power'
    });

    gsap.from(this.document.querySelector('.circleBanner'), {
      duration: 8,
      opacity: 0,
      stagger: 1,
    });

    gsap.from('.bolha-persona-1', {
      scrollTrigger: {
        trigger: '.bolha-persona-1',
        // toggleActions: 'restart pause reverese pause',
      },
      x: -150,
      duration: 2,
      opacity: 0,
    });

    gsap.from('.bolha-persona-2', {
      scrollTrigger: {
        trigger: '.bolha-persona-2',
        // toggleActions: 'restart pause reverese pause',
      },
      y: -150,
      duration: 2,
      opacity: 0,
    });

    gsap.to(this.document.querySelector('.bolha-persona-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.bolha-persona-3'),
        // toggleActions: 'restart pause reverese pause',
        start: '-120% center',
      },
      x: -500,
      y: 50,
      rotate: 50,
      duration: 6,
    });

    gsap.from(this.document.querySelector('.bolha-persona-4'), {
      scrollTrigger: {
        trigger: '.bolha-persona-4',
        // toggleActions: 'restart pause reverese pause',
      },
      x: -150,
      duration: 2,
      opacity: 0,
    });

    gsap.from(('.img-mentor-1'), {
      scrollTrigger: {
        trigger:('.texto-mentoria'),
        // toggleActions: 'restart pause reverese pause',
      },
      y: 300,
      duration: 2,
      opacity: 0,
    });

    gsap.from(this.document.querySelector('.img-mentor-2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.texto-mentoria'),
        // toggleActions: 'restart pause reverese pause',
      },
      y: -300,
      duration: 2,
      opacity: 0,
    });

    gsap.from(this.document.querySelector('.texto-persona'), {
      scrollTrigger: {
        trigger: '.texto-persona',
        // toggleActions: 'restart pause reverese pause',
      },
      y: 150,
      duration: 2,
      opacity: 0,
    });

    gsap.from(this.document.querySelector('.texto-categoria'), {
      scrollTrigger: {
        trigger: '.texto-categoria',
        // toggleActions: 'restart pause reverese pause',
      },
      x: -150,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      ease: 'bouce',
    });

    gsap.from(('.item' ),{
      scrollTrigger: {
        trigger: '.categoria-itens ',
        // toggleActions: 'restart pause reverese pause',        
      },
      y: 100,
      duration: 1.8,
      delay: 0.5,
      opacity: 0,
      stagger: 0.1, 
      ease: 'back',
      scale: 0.4, 
    });

    gsap.from(('.titulo-categoria'),{
      scrollTrigger: {
        trigger: '.texto-categoria-2',
        // toggleActions: 'restart pause reverse pause',
      },
      x: -300,
      duration: 1.5,
      delay: 1,
      opacity: 0,
      stagger: 1, 
      ease: 'bouce',
    });

    gsap.from(('.paragrafo-padrao'),{
      scrollTrigger: {
        trigger: '.texto-categoria-2',
        // toggleActions: 'restart pause reverse pause',
      },
      x: -300,
      duration: 1.5,
      delay: 0.5,
      opacity: 0,
      stagger: 2, 
      ease: 'bouce',
    });


    gsap.to(this.document.querySelector('.circlue-categoria'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.circlue-categoria'),
        scrub: true,
        start: '-110% center',
      },
      y: -200,
      x: 300,
      scale: 2,
      ease: 'bouce',
    });

    gsap.to(this.document.querySelector('.circlue-categoria-2'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.circlue-categoria-2'),
        scrub: true,
        start: '-80% center',
      },
      y: -500,
      x: -150,
      scale: 0.5,
      ease: 'power',
    });

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter('.mentores-img', 'skewY', 'deg'), // fast
      clamp = gsap.utils.clamp(-150, 150); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -600);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 1.5,
            ease: 'elastic',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set('.skewElem', { transformOrigin: 'left center', force3D: true });

    gsap.to(this.document.querySelector('.circlue-mentor'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.circlue-mentor'),
        scrub: true,
        start: '-100% center',
      },
      x: -150,
      y: -400,
      scale: 2
    });

    gsap.from(document.querySelector('.mentores-img'), {
      scrollTrigger: {
        trigger: document.querySelector('.mentores-img'),
        // toggleActions: 'restart pause reverese pause',
        start: '-115% top',
      },
      x: -150,
      duration: 2.2,
      opacity: 0,
    });

    gsap.from('.titulo-mentoria-2', {
      scrollTrigger: {
        trigger: this.document.querySelector('.mentores-img'),
        // toggleActions: 'restart pause reverese pause',
      },
      x: -300,
      duration: 2,
      opacity: 0,
      delay: 0.8
    });

    gsap.from('.paragrafro-mentoria', {
      scrollTrigger: {
        trigger: this.document.querySelector('.titulo-mentoria-2'),
        // toggleActions: 'restart pause reverese pause',
      },
      x: -300,
      duration: 3,
      opacity: 0,
      delay: 0.8,
      ease: 'power3'
    });

    gsap.from((".titulo-impacto"),{
      scrollTrigger: {
        trigger: '.section-impacto',
      },
      y: -250,
      opacity: 0,
      duration: 2,
      delay: 1,
      ease: 'circ'
    });

    gsap.from((".impacto-img"),{
      scrollTrigger: {
        trigger: '.section-impacto',
        // toggleActions: 'restart pause reverse pause',
      },
      y: 150,
      opacity: 0,
      delay: 0.8,
      duration: 2,
      ease: 'back',
      stagger: 0.50, 
      width: -10,
    })

    gsap.from((".box-color"),{
      scrollTrigger: {
        trigger: '.section-impacto',
        // toggleActions: 'restart pause reverse pause',
      },
      y: 150,
      opacity: 0,
      delay: 0.8,
      duration: 2.5,
      ease: 'ease',
    })

    gsap.from((".paragrafo-impacto"),{
      scrollTrigger: {
        trigger: '.section-impacto',
        // toggleActions: 'restart pause reverse pause',
      },
      x: -200,
      opacity: 0,
      delay: 0.8,
      duration: 2.5,
      ease: 'circlue',
    })



    // gsap.from(('.titulo-categoria'),{
    //   scrollTrigger: {
    //     trigger: '.texto-categoria-2',
    //     toggleActions: 'restart pause reverse pause',
    //   },
    //   x: -300,
    //   duration: 1.5,
    //   delay: 1,
    //   opacity: 0,
    //   stagger: 1, 
    //   ease: 'bouce',
    // });

    gsap.from(this.document.querySelector('.borda-mentoria'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.titulo-mentoria-2'),
        // toggleActions: 'restart pause reverese pause',
      },
      y: 300,
      duration: 1,
      opacity: 0,
    });

  
    gsap.from(document.querySelector('.footer'), {
      scrollTrigger: {
        trigger: document.querySelector('.footer'),
        // toggleActions: 'restart pause reverese pause',
        start: '-115% top',
      },
      duration: 2.2,
      opacity: 0,
    });
  }
}
