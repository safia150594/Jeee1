import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeeHeaderComponent } from './jeee-header.component';

describe('JeeeHeaderComponent', () => {
  let component: JeeeHeaderComponent;
  let fixture: ComponentFixture<JeeeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeeeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeeeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
