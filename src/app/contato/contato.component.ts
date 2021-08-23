import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }


  enviarEmail(){
    Swal.fire({
      icon: 'success',
      text: 'Obrigado pelo seu contato em breve retornaremos a sua solicitação!',
    });
    this.router.navigate(['/home'])
  }
}
