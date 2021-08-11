import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertaService } from '../service/alerta.service';
import { TemaService } from '../service/tema.service';



@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(

  private router: Router,
  private temaService: TemaService,
  private alerta: AlertaService

  ) { }
  ngOnInit(){

    if(environment.token == ''){
      alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/home'])
    }

    if(environment.tipo != 'mentor'){
      this.alerta.showAlertInfo('Você precisa ser mentor para acessar essa rota')
      this.router.navigate(['/inicio'])
    }

    this.findAllTemas()
  }
  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })

  }

}
