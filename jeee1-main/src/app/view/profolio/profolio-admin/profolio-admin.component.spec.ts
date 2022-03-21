import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfolioAdminComponent } from './profolio-admin.component';

describe('ProfolioAdminComponent', () => {
  let component: ProfolioAdminComponent;
  let fixture: ComponentFixture<ProfolioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfolioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfolioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
