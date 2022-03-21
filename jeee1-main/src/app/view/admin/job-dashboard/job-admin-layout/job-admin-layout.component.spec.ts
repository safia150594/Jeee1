import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdminLayoutComponent } from './job-admin-layout.component';

describe('JobAdminLayoutComponent', () => {
  let component: JobAdminLayoutComponent;
  let fixture: ComponentFixture<JobAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdminLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
