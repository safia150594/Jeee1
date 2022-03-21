import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdminHeaderComponent } from './job-admin-header.component';

describe('JobAdminHeaderComponent', () => {
  let component: JobAdminHeaderComponent;
  let fixture: ComponentFixture<JobAdminHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdminHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
