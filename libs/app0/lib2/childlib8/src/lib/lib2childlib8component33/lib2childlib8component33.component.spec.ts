import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component33Component } from './lib2childlib8component33.component';

describe('Lib2childlib8component33Component', () => {
  let component: Lib2childlib8component33Component;
  let fixture: ComponentFixture<Lib2childlib8component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
