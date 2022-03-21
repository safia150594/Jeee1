import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentShortTermsMonthlyComponent } from './rent-short-terms-monthly.component';

describe('RentShortTermsMonthlyComponent', () => {
  let component: RentShortTermsMonthlyComponent;
  let fixture: ComponentFixture<RentShortTermsMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentShortTermsMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentShortTermsMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
