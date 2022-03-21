import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTRandLCRComponent } from './ctrand-lcr.component';

describe('CTRandLCRComponent', () => {
  let component: CTRandLCRComponent;
  let fixture: ComponentFixture<CTRandLCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTRandLCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTRandLCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
