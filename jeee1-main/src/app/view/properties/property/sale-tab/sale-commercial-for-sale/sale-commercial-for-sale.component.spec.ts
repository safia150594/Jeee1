import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCommercialForSaleComponent } from './sale-commercial-for-sale.component';

describe('SaleCommercialForSaleComponent', () => {
  let component: SaleCommercialForSaleComponent;
  let fixture: ComponentFixture<SaleCommercialForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleCommercialForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCommercialForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
