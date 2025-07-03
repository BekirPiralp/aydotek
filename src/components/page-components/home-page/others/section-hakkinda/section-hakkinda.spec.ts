import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHakkinda } from './section-hakkinda';

describe('SectionHakkinda', () => {
  let component: SectionHakkinda;
  let fixture: ComponentFixture<SectionHakkinda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHakkinda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHakkinda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
