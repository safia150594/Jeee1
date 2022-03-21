import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingPortalComponent } from './marketing-portal.component';

describe('MarketingPortalComponent', () => {
  let component: MarketingPortalComponent;
  let fixture: ComponentFixture<MarketingPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
