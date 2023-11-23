import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTimeComponent } from './inserir-time.component';

describe('InserirTimeComponent', () => {
  let component: InserirTimeComponent;
  let fixture: ComponentFixture<InserirTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirTimeComponent]
    });
    fixture = TestBed.createComponent(InserirTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
