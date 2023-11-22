import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  fullname: string = '';
  photo: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  register() {
    if (this.password !== this.confirmPassword) {
      console.error('As senhas não correspondem.');
      alert("As senhas não correspondem");
      return;
    }
//atributos p mandar pro back: this.o que tava no html
    const user = {
      username: this.username,
      senha: this.password,
      nomeCompleto: this.fullname,
      avatar: this.photo,
      email: this.email
    };

    this.http.post('http://localhost:8080/api/usuario/register', user)
      .subscribe(
        response => {
          console.log('Cadastro realizado com sucesso', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Erro ao cadastrar usuário', error);
        }
      );
  }
}
