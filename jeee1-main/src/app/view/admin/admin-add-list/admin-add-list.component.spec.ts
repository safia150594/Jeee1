import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddListComponent } from './admin-add-list.component';

describe('AdminAddListComponent', () => {
  let component: AdminAddListComponent;
  let fixture: ComponentFixture<AdminAddListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
