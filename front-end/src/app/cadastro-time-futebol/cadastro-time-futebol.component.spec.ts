import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTimeFutebolComponent } from './cadastro-time-futebol.component';

describe('CadastroTimeFutebolComponent', () => {
  let component: CadastroTimeFutebolComponent;
  let fixture: ComponentFixture<CadastroTimeFutebolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroTimeFutebolComponent]
    });
    fixture = TestBed.createComponent(CadastroTimeFutebolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
