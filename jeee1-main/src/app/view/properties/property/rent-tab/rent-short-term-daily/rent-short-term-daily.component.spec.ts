import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentShortTermDailyComponent } from './rent-short-term-daily.component';

describe('RentShortTermDailyComponent', () => {
  let component: RentShortTermDailyComponent;
  let fixture: ComponentFixture<RentShortTermDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentShortTermDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentShortTermDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
