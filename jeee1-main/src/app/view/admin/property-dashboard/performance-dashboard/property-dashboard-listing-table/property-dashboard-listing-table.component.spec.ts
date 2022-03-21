import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDashboardListingTableComponent } from './property-dashboard-listing-table.component';

describe('PropertyDashboardListingTableComponent', () => {
  let component: PropertyDashboardListingTableComponent;
  let fixture: ComponentFixture<PropertyDashboardListingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDashboardListingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDashboardListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
