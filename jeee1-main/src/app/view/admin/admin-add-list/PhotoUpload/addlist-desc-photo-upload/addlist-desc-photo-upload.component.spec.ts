import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistDescPhotoUploadComponent } from './addlist-desc-photo-upload.component';

describe('AddlistDescPhotoUploadComponent', () => {
  let component: AddlistDescPhotoUploadComponent;
  let fixture: ComponentFixture<AddlistDescPhotoUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlistDescPhotoUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistDescPhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
