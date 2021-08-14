import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  confirmaSenha: string;
  tipoUsuarios: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    window.scroll(0, 0);
}

  confirmeSenha(event: any) {
    this.confirmaSenha = event.target.value;
  }

  tipoUsuario(event: any) {
    this.tipoUsuarios = event.target.value;
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuarios;
  console.log(environment.token)
    if (this.usuario.senha != this.confirmaSenha) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Senhas não conferem',
      });
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/logar'])
      Swal.fire({
        icon: 'success',
        title: 'Perfeito',
        text: 'Usuário cadastratado com sucesso!',
      });
      },
        (erro)=>{
          if(erro.status == 400){
            Swal.fire({
              icon: 'warning',
              title: 'Usuário já cadastrado!',
              text: 'Verifique seus dados.',
            });
          } else if(erro.status == 500){
            Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'Algum campo não foi preenchido corretamente',
            });
          }
        }
      )
     }
  }
}
