import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component28Component } from './lib0childlib1component28.component';

describe('Lib0childlib1component28Component', () => {
  let component: Lib0childlib1component28Component;
  let fixture: ComponentFixture<Lib0childlib1component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
