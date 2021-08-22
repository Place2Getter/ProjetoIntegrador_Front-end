import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import { gsap } from 'gsap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit {
  usuario: Usuario = new Usuario();
  idUsuario: number;
  confirmarSenha: string;
  tipoUsuario: string;
  foto = environment.foto;

  @ViewChild('img-personas', { static: true })
  divisorBanner: ElementRef<HTMLDivElement>;
  document: any;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0,0);

  //   if (environment.token == '') {
  //     const Toast = Swal.mixin({
  //       toast: true,
  //       position: 'top-end',
  //       showConfirmButton: false,
  //       timer: 2500,
  //       didOpen: (toast) => {
  //         toast.addEventListener('mouseenter', Swal.stopTimer)
  //         toast.addEventListener('mouseleave', Swal.resumeTimer)
  //       }
  //     })
  //      this.router.navigate(['/logar']);
  //        Toast.fire({
  //         icon: 'info',
  //         title: 'Sua conexão expirou!'
  //      });
  //  }

    this.idUsuario = this.route.snapshot.params['id'];
    this.findByIdUsuario(this.idUsuario);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  atualizar() {
    this.usuario.tipo = this.tipoUsuario;

    if (this.usuario.senha != this.confirmarSenha) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Senhas não conferem',
        timer: 2000,
      });
    } else {
      this.authService.putUsuario(this.usuario).subscribe(
        (resp: Usuario) => {
          this.usuario = resp;
          this.router.navigate(['/inicio']);
          Swal.fire({
            icon: 'success',
            title: 'Place2Getter',
            text: 'Dados atualizados com sucesso, faça o login novamente!',
            timer: 3000,
          });
          environment.token = '';
          environment.nome = '';
          environment.foto = '';
          environment.id = 0;
          this.router.navigate(['/logar']);
        },
        (erro) => {
          if (erro.status == 500) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timerProgressBar: false,
              timer: 2500,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: 'error',
              title: 'Algum dado não foi preenchido corretamente!',
            });
          }
        }
      );
    }
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }
}
