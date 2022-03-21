import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchPropertyComponent } from './quick-search-property.component';

describe('QuickSearchPropertyComponent', () => {
  let component: QuickSearchPropertyComponent;
  let fixture: ComponentFixture<QuickSearchPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickSearchPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSearchPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
