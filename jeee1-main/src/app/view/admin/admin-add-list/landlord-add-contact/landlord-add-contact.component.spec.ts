import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordAddContactComponent } from './landlord-add-contact.component';

describe('LandlordAddContactComponent', () => {
  let component: LandlordAddContactComponent;
  let fixture: ComponentFixture<LandlordAddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordAddContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordAddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
