import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Usuario } from 'src/app/model/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import "core-js/stable";
import "regenerator-runtime/runtime";

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  
  constructor( 
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

    ) { }

  ngOnInit(){
  
    window.scroll(0,0)

    // if (environment.token == '') {
    //   this.router.navigate(['/logar']);
    //   Swal.fire({
    //     icon: 'info',
    //     title: 'Oops...',
    //     text: 'Sua conexão inspirou!',
    //   });
    // }

    let id = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }
}
