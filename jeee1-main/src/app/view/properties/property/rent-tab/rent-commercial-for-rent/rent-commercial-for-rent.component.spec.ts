import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCommercialForRentComponent } from './rent-commercial-for-rent.component';

describe('RentCommercialForRentComponent', () => {
  let component: RentCommercialForRentComponent;
  let fixture: ComponentFixture<RentCommercialForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentCommercialForRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCommercialForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
