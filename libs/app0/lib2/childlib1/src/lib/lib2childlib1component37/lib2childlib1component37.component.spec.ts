import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component37Component } from './lib2childlib1component37.component';

describe('Lib2childlib1component37Component', () => {
  let component: Lib2childlib1component37Component;
  let fixture: ComponentFixture<Lib2childlib1component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
