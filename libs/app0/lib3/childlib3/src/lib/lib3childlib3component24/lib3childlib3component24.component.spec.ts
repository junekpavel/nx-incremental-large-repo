import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component24Component } from './lib3childlib3component24.component';

describe('Lib3childlib3component24Component', () => {
  let component: Lib3childlib3component24Component;
  let fixture: ComponentFixture<Lib3childlib3component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
