import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-campeonato',
  templateUrl: './cadastro-campeonato.component.html',
  styleUrls: ['./cadastro-campeonato.component.css']
})
export class CadastroCampeonatoComponent {
  nome: string = '';
  descricao: string = '';
  quantTimes: string = '';
  premiacao: string = '';
  formaCompeticao: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  cadastrarCampeonato() {
    if (!this.nome || !this.descricao || !this.quantTimes || !this.formaCompeticao) {
      console.error('Por favor, preencha todos os campos obrigatórios.');
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const campeonato = {
      nome: this.nome,
      descricao: this.descricao,
      quantTimes: this.quantTimes,
      premiacao: this.premiacao,
      formaCompeticao: this.formaCompeticao
    };

    this.http.post('http://localhost:8080/api/competicao', campeonato)
  .subscribe(
    (response: any) => {
      console.log('Campeonato cadastrado com sucesso', response);
      const idCompeticao = response.id;
      //tava repassando pela rota, mas n precisa aparentemente 
      this.router.navigate(['/inserir-time', idCompeticao]);
    },
    error => {
      console.error('Erro ao cadastrar campeonato', error);
    }
  );

  }
}
