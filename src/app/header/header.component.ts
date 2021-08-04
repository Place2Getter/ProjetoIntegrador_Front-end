import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header', { static:  true }) header: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.inicialAnimation();
  }

  inicialAnimation(): void{
    gsap.from(this.header.nativeElement.childNodes, {
      duration: 0.8,
      opacity: 0,
      y: -30,
      stagger: 0.3,
      delay: 0.5,
    })
  };
}
