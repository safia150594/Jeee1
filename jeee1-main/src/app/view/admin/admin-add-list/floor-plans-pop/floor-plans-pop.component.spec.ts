import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlansPopComponent } from './floor-plans-pop.component';

describe('FloorPlansPopComponent', () => {
  let component: FloorPlansPopComponent;
  let fixture: ComponentFixture<FloorPlansPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorPlansPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorPlansPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
