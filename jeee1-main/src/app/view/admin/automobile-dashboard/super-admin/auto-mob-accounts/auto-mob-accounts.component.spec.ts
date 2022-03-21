import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMobAccountsComponent } from './auto-mob-accounts.component';

describe('AutoMobAccountsComponent', () => {
  let component: AutoMobAccountsComponent;
  let fixture: ComponentFixture<AutoMobAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMobAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMobAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
