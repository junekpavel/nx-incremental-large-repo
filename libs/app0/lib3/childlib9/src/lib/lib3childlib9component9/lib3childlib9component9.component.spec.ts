import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component9Component } from './lib3childlib9component9.component';

describe('Lib3childlib9component9Component', () => {
  let component: Lib3childlib9component9Component;
  let fixture: ComponentFixture<Lib3childlib9component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});