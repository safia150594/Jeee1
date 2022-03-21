import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStaffAddListComponent } from './manage-staff-add-list.component';

describe('ManageStaffAddListComponent', () => {
  let component: ManageStaffAddListComponent;
  let fixture: ComponentFixture<ManageStaffAddListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStaffAddListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStaffAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
