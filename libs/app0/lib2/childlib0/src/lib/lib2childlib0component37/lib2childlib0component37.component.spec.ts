import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component37Component } from './lib2childlib0component37.component';

describe('Lib2childlib0component37Component', () => {
  let component: Lib2childlib0component37Component;
  let fixture: ComponentFixture<Lib2childlib0component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
