import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib0component15Component } from './lib0childlib0component15.component';

describe('Lib0childlib0component15Component', () => {
  let component: Lib0childlib0component15Component;
  let fixture: ComponentFixture<Lib0childlib0component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
