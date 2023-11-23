import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroJogadoresComponent } from './cadastro-jogadores.component';

describe('CadastroJogadoresComponent', () => {
  let component: CadastroJogadoresComponent;
  let fixture: ComponentFixture<CadastroJogadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroJogadoresComponent]
    });
    fixture = TestBed.createComponent(CadastroJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
