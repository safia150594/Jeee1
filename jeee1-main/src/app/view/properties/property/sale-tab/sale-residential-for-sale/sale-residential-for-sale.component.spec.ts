import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleResidentialForSaleComponent } from './sale-residential-for-sale.component';

describe('SaleResidentialForSaleComponent', () => {
  let component: SaleResidentialForSaleComponent;
  let fixture: ComponentFixture<SaleResidentialForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleResidentialForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleResidentialForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
