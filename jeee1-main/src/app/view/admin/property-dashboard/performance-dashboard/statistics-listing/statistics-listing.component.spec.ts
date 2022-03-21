import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsListingComponent } from './statistics-listing.component';

describe('StatisticsListingComponent', () => {
  let component: StatisticsListingComponent;
  let fixture: ComponentFixture<StatisticsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
