import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component32Component } from './lib3childlib2component32.component';

describe('Lib3childlib2component32Component', () => {
  let component: Lib3childlib2component32Component;
  let fixture: ComponentFixture<Lib3childlib2component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
