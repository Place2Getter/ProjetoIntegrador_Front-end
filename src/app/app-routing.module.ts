import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'cadastrar', pathMatch: 'full'},
  {path: 'contato', component: ContatoComponent},
  {path: 'logar', component: LoginComponent},
  {path: 'cadastrar', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
