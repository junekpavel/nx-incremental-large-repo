import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component36Component } from './lib0childlib4component36.component';

describe('Lib0childlib4component36Component', () => {
  let component: Lib0childlib4component36Component;
  let fixture: ComponentFixture<Lib0childlib4component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
