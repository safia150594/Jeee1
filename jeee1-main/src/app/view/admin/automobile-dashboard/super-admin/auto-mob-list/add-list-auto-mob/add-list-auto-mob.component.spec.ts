import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListAutoMobComponent } from './add-list-auto-mob.component';

describe('AddListAutoMobComponent', () => {
  let component: AddListAutoMobComponent;
  let fixture: ComponentFixture<AddListAutoMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListAutoMobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListAutoMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
