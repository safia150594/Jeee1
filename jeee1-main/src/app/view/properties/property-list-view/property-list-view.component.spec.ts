import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListViewComponent } from './property-list-view.component';

describe('PropertyListViewComponent', () => {
  let component: PropertyListViewComponent;
  let fixture: ComponentFixture<PropertyListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
