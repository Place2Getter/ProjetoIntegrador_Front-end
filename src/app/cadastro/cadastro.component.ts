import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
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

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  confirmarSenha(event: any) {
    this.confirmaSenha = event.target.value;
  }

  tipoUsuario(event: any) {
    this.tipoUsuarios = event.target.value;
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuarios;

    console.log(environment.token)
    console.log(environment.foto)
    console.log(environment.id)

    if (this.usuario.senha != this.confirmaSenha) {
      alert('Senha incorretas');
    } else {
      this.authService.cadastrar(this.usuario).subscribe(
      (resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/home-mentor']);
        alert('cadastra efetuada');
      },
      (erro) =>{
        if(erro.status == 400){
          alert('Usuário já cadastrado')
        }else if(erro.status == 500){
          alert('Algum campo não foi preenchido corretamente')
        }
      }
      );
    }
  }
}
