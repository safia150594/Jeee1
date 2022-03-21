import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMobListComponent } from './auto-mob-list.component';

describe('AutoMobListComponent', () => {
  let component: AutoMobListComponent;
  let fixture: ComponentFixture<AutoMobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
