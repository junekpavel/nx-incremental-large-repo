import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component32Component } from './lib2childlib5component32.component';

describe('Lib2childlib5component32Component', () => {
  let component: Lib2childlib5component32Component;
  let fixture: ComponentFixture<Lib2childlib5component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
