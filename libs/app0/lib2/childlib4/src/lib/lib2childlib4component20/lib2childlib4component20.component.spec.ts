import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component20Component } from './lib2childlib4component20.component';

describe('Lib2childlib4component20Component', () => {
  let component: Lib2childlib4component20Component;
  let fixture: ComponentFixture<Lib2childlib4component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
