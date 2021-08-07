import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){

    if (environment.token == '') {
      this.router.navigate(['/logar']);
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Sua conexão inspirou!',
      });
    }
  }

}
