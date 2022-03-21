import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPopComponent } from './document-pop.component';

describe('DocumentPopComponent', () => {
  let component: DocumentPopComponent;
  let fixture: ComponentFixture<DocumentPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
