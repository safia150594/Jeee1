import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerpadLayoutComponent } from './brokerpad-layout.component';

describe('BrokerpadLayoutComponent', () => {
  let component: BrokerpadLayoutComponent;
  let fixture: ComponentFixture<BrokerpadLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerpadLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerpadLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
