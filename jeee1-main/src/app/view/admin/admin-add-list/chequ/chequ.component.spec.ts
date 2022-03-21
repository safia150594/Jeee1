import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequComponent } from './chequ.component';

describe('ChequComponent', () => {
  let component: ChequComponent;
  let fixture: ComponentFixture<ChequComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
