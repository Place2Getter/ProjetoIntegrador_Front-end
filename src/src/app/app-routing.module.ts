import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem/postagem.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},

  {path: 'contato', component: ContatoComponent},
  {path: 'logar', component: LoginComponent},

  {path: 'cadastrar', component: CadastroComponent},
  {path: 'home', component: HomeComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},

  {path: 'postagem-edit/:id' , component: PostagemEditComponent},
  {path: 'postagem-delete/:id' , component: PostagemDeleteComponent},

  {path: 'usuario-edit/:id', component: UsuarioEditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
