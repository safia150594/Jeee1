import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListadminComponent } from './job-listadmin.component';

describe('JobListadminComponent', () => {
  let component: JobListadminComponent;
  let fixture: ComponentFixture<JobListadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
