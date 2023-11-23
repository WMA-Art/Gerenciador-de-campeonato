import { NavbarComponent } from './navbar/navbar.component';
import { CadastroCampeonatoComponent } from './cadastro-campeonato/cadastro-campeonato.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import {CadastroTimeFutebolComponent} from './cadastro-time-futebol/cadastro-time-futebol.component'
import { InserirTimeComponent } from './inserir-time/inserir-time.component';

///aqui fica as telas chamando os componentes pra cada uma, tem q proteger dps
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CadastroComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard]},
  {path: 'campeonato', component:CadastroCampeonatoComponent},
  {path: 'times', component:CadastroTimeFutebolComponent},
  { path: 'times/:id', component: CadastroTimeFutebolComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inserir-time/:id', component: InserirTimeComponent},
  { path: 'inserir-time', component: InserirTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }