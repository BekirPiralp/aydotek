import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAnasayfa } from './section-anasayfa';

describe('SectionAnasayfa', () => {
  let component: SectionAnasayfa;
  let fixture: ComponentFixture<SectionAnasayfa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAnasayfa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAnasayfa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
