import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component29Component } from './lib0childlib3component29.component';

describe('Lib0childlib3component29Component', () => {
  let component: Lib0childlib3component29Component;
  let fixture: ComponentFixture<Lib0childlib3component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
