import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoPopComponent } from './extra-info-pop.component';

describe('ExtraInfoPopComponent', () => {
  let component: ExtraInfoPopComponent;
  let fixture: ComponentFixture<ExtraInfoPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraInfoPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraInfoPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
