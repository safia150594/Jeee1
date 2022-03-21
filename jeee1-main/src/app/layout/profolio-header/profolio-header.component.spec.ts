import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfolioHeaderComponent } from './profolio-header.component';

describe('ProfolioHeaderComponent', () => {
  let component: ProfolioHeaderComponent;
  let fixture: ComponentFixture<ProfolioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfolioHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfolioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
