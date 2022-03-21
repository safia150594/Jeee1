import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySettingComponent } from './agency-setting.component';

describe('AgencySettingComponent', () => {
  let component: AgencySettingComponent;
  let fixture: ComponentFixture<AgencySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
