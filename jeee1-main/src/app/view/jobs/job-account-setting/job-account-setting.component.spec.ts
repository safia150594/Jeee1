import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAccountSettingComponent } from './job-account-setting.component';

describe('JobAccountSettingComponent', () => {
  let component: JobAccountSettingComponent;
  let fixture: ComponentFixture<JobAccountSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAccountSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
