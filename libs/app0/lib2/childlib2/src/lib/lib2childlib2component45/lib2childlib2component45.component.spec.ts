import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component45Component } from './lib2childlib2component45.component';

describe('Lib2childlib2component45Component', () => {
  let component: Lib2childlib2component45Component;
  let fixture: ComponentFixture<Lib2childlib2component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
