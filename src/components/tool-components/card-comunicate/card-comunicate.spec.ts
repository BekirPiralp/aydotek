import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComunicate } from './card-comunicate';

describe('CardComunicate', () => {
  let component: CardComunicate;
  let fixture: ComponentFixture<CardComunicate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComunicate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComunicate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
