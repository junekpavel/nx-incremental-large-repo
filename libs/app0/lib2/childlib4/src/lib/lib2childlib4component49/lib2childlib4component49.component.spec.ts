import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component49Component } from './lib2childlib4component49.component';

describe('Lib2childlib4component49Component', () => {
  let component: Lib2childlib4component49Component;
  let fixture: ComponentFixture<Lib2childlib4component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
