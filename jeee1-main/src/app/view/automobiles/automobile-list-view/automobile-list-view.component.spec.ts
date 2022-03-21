import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileListViewComponent } from './automobile-list-view.component';

describe('AutomobileListViewComponent', () => {
  let component: AutomobileListViewComponent;
  let fixture: ComponentFixture<AutomobileListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomobileListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
