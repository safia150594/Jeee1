import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMobDashboardComponent } from './auto-mob-dashboard.component';

describe('AutoMobDashboardComponent', () => {
  let component: AutoMobDashboardComponent;
  let fixture: ComponentFixture<AutoMobDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMobDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMobDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
