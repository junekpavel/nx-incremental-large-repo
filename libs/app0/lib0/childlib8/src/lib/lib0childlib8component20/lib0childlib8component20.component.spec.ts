import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component20Component } from './lib0childlib8component20.component';

describe('Lib0childlib8component20Component', () => {
  let component: Lib0childlib8component20Component;
  let fixture: ComponentFixture<Lib0childlib8component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
