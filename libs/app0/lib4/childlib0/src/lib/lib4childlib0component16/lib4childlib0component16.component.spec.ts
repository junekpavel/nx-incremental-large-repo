import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component16Component } from './lib4childlib0component16.component';

describe('Lib4childlib0component16Component', () => {
  let component: Lib4childlib0component16Component;
  let fixture: ComponentFixture<Lib4childlib0component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
