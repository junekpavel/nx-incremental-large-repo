import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component31Component } from './lib0childlib3component31.component';

describe('Lib0childlib3component31Component', () => {
  let component: Lib0childlib3component31Component;
  let fixture: ComponentFixture<Lib0childlib3component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
