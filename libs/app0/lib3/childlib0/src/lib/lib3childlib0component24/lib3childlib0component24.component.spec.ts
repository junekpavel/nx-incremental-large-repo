import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component24Component } from './lib3childlib0component24.component';

describe('Lib3childlib0component24Component', () => {
  let component: Lib3childlib0component24Component;
  let fixture: ComponentFixture<Lib3childlib0component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
