import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentRoomsForRentComponent } from './rent-rooms-for-rent.component';

describe('RentRoomsForRentComponent', () => {
  let component: RentRoomsForRentComponent;
  let fixture: ComponentFixture<RentRoomsForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentRoomsForRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentRoomsForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
