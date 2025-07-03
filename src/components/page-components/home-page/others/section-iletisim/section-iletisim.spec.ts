import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIletisim } from './section-iletisim';

describe('SectionIletisim', () => {
  let component: SectionIletisim;
  let fixture: ComponentFixture<SectionIletisim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionIletisim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionIletisim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
