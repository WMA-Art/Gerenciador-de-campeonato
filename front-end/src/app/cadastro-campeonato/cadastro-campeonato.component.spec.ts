import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCampeonatoComponent } from './cadastro-campeonato.component';

describe('CadastroCampeonatoComponent', () => {
  let component: CadastroCampeonatoComponent;
  let fixture: ComponentFixture<CadastroCampeonatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCampeonatoComponent]
    });
    fixture = TestBed.createComponent(CadastroCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
