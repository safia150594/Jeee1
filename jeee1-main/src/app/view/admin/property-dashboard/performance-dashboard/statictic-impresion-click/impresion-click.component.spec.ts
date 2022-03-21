import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresionClickComponent } from './impresion-click.component';

describe('ImpresionClickComponent', () => {
  let component: ImpresionClickComponent;
  let fixture: ComponentFixture<ImpresionClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpresionClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpresionClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
