import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfolioListingTableComponent } from './profolio-listing-table.component';

describe('ProfolioListingTableComponent', () => {
  let component: ProfolioListingTableComponent;
  let fixture: ComponentFixture<ProfolioListingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfolioListingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfolioListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
