import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component10Component } from './lib2childlib3component10.component';

describe('Lib2childlib3component10Component', () => {
  let component: Lib2childlib3component10Component;
  let fixture: ComponentFixture<Lib2childlib3component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
