import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usuario: Usuario = new Usuario()
  idProfile: number;

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
  ) { }

  ngOnInit(){
    
    // if (environment.token == '') {
    //   this.router.navigate(['/logar']);
    //   Swal.fire({
    //     icon: 'info',
    //     title: 'Oops...',
    //     text: 'Sua conexão expirou!',
    //   });
    // } 
    
    // this.idProfile = this.route.snapshot.params['id']
    // this.findByProfile(this.idProfile);
  }

  findByProfile(id: number){
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

}
