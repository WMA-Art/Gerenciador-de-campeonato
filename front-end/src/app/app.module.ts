import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpBasicAuthInterceptor } from './http-basic-auth.interceptor';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    SearchComponent,
    UserPerfilComponent,
    NavbarComponent,
    ProfileComponent
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpBasicAuthInterceptor, multi: true}],
  bootstrap: [ AppComponent ]
})
export class AppModule { }