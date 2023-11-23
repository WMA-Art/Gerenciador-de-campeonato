import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-time-futebol',
  templateUrl: './cadastro-time-futebol.component.html',
  styleUrls: ['./cadastro-time-futebol.component.css']
})
export class CadastroTimeFutebolComponent implements OnInit {
  idCompeticao: string ='';
  nome: string = '';
  imagem: string = '';
  abreviacao: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  cadastrarTime() {
    if (!this.nome || !this.imagem || !this.abreviacao) {
      console.error('Por favor, preencha todos os campos obrigatórios.');
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    const time = {
      nome: this.nome,
      imagem: this.imagem,
      abreviacao: this.abreviacao,
      idCompeticao: this.idCompeticao
    };

    this.http.post('http://localhost:8080/api/time', time)
      .subscribe(
        (response: any) => {
          console.log('Time cadastrado com sucesso', response);
          const idTime = response.id;
          this.router.navigate(['/cadastro-jogador', idTime]);
        },
        error => {
          console.error('Erro ao cadastrar time', error);
        }
      );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idCompeticao = params['idCompeticao'];
      console.log('ID da competição:', this.idCompeticao);
    });
  }
}
