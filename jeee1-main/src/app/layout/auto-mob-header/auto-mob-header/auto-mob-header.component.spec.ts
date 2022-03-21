import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMobHeaderComponent } from './auto-mob-header.component';

describe('AutoMobHeaderComponent', () => {
  let component: AutoMobHeaderComponent;
  let fixture: ComponentFixture<AutoMobHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMobHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMobHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
