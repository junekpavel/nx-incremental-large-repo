import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component29Component } from './lib0childlib1component29.component';

describe('Lib0childlib1component29Component', () => {
  let component: Lib0childlib1component29Component;
  let fixture: ComponentFixture<Lib0childlib1component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
