import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleMultipleUnitsForSaleComponent } from './sale-multiple-units-for-sale.component';

describe('SaleMultipleUnitsForSaleComponent', () => {
  let component: SaleMultipleUnitsForSaleComponent;
  let fixture: ComponentFixture<SaleMultipleUnitsForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleMultipleUnitsForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleMultipleUnitsForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
