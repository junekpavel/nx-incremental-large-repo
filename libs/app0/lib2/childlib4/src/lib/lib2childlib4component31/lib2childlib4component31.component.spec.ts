import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component31Component } from './lib2childlib4component31.component';

describe('Lib2childlib4component31Component', () => {
  let component: Lib2childlib4component31Component;
  let fixture: ComponentFixture<Lib2childlib4component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
