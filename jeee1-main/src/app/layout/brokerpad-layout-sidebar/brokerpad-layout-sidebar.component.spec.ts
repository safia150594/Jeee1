import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerpadLayoutSidebarComponent } from './brokerpad-layout-sidebar.component';

describe('BrokerpadLayoutSidebarComponent', () => {
  let component: BrokerpadLayoutSidebarComponent;
  let fixture: ComponentFixture<BrokerpadLayoutSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerpadLayoutSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerpadLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
