import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerpadHeaderComponent } from './brokerpad-header.component';

describe('BrokerpadHeaderComponent', () => {
  let component: BrokerpadHeaderComponent;
  let fixture: ComponentFixture<BrokerpadHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerpadHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerpadHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
