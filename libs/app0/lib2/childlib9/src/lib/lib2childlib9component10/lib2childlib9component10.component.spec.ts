import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component10Component } from './lib2childlib9component10.component';

describe('Lib2childlib9component10Component', () => {
  let component: Lib2childlib9component10Component;
  let fixture: ComponentFixture<Lib2childlib9component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
