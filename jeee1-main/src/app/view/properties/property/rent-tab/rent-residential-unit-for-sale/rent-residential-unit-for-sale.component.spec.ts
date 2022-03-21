import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentResidentialUnitForSaleComponent } from './rent-residential-unit-for-sale.component';

describe('RentResidentialUnitForSaleComponent', () => {
  let component: RentResidentialUnitForSaleComponent;
  let fixture: ComponentFixture<RentResidentialUnitForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentResidentialUnitForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentResidentialUnitForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
