import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component29Component } from './lib2childlib4component29.component';

describe('Lib2childlib4component29Component', () => {
  let component: Lib2childlib4component29Component;
  let fixture: ComponentFixture<Lib2childlib4component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
