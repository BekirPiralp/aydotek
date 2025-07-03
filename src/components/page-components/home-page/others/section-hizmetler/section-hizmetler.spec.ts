import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHizmetler } from './section-hizmetler';

describe('SectionHizmetler', () => {
  let component: SectionHizmetler;
  let fixture: ComponentFixture<SectionHizmetler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHizmetler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHizmetler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
