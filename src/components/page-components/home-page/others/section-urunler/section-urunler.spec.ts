import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionUrunler } from './section-urunler';

describe('SectionUrunler', () => {
  let component: SectionUrunler;
  let fixture: ComponentFixture<SectionUrunler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionUrunler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionUrunler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
