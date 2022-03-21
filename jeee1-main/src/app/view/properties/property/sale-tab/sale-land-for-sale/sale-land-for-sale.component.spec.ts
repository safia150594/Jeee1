import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleLandForSaleComponent } from './sale-land-for-sale.component';

describe('SaleLandForSaleComponent', () => {
  let component: SaleLandForSaleComponent;
  let fixture: ComponentFixture<SaleLandForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleLandForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleLandForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
