import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component17Component } from './lib0childlib3component17.component';

describe('Lib0childlib3component17Component', () => {
  let component: Lib0childlib3component17Component;
  let fixture: ComponentFixture<Lib0childlib3component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
