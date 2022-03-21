import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileDashboardComponent } from './automobile-dashboard.component';

describe('AutomobileDashboardComponent', () => {
  let component: AutomobileDashboardComponent;
  let fixture: ComponentFixture<AutomobileDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobileDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
