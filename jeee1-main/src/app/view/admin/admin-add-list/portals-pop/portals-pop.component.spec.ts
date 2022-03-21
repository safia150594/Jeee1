import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalsPopComponent } from './portals-pop.component';

describe('PortalsPopComponent', () => {
  let component: PortalsPopComponent;
  let fixture: ComponentFixture<PortalsPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalsPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalsPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
