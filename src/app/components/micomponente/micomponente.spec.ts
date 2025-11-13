import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Micomponente } from './micomponente';

describe('Micomponente', () => {
  let component: Micomponente;
  let fixture: ComponentFixture<Micomponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Micomponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Micomponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
