import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component15Component } from './lib2childlib4component15.component';

describe('Lib2childlib4component15Component', () => {
  let component: Lib2childlib4component15Component;
  let fixture: ComponentFixture<Lib2childlib4component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
