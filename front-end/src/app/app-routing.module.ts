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
import { ProfileComponent } from './profile/profile.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';

///aqui fica as telas chamando os componentes pra cada uma, tem q proteger dps
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CadastroComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard]},
  {path: 'campeonato', component:CadastroCampeonatoComponent, canActivate: [AuthenticatedGuard]},
  {path: 'times', component:CadastroTimeFutebolComponent, canActivate: [AuthenticatedGuard]},
  { path: 'times/:id', component: CadastroTimeFutebolComponent,canActivate: [AuthenticatedGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inserir-time/:id', component: InserirTimeComponent, canActivate: [AuthenticatedGuard]},
  { path: 'inserir-time', component: InserirTimeComponent, canActivate: [AuthenticatedGuard]},
  { path: 'profile', component:ProfileComponent, canActivate: [AuthenticatedGuard]},
  {path: 'editar-perfil', component:EditarPerfilComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }