import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component30Component } from './lib2childlib1component30.component';

describe('Lib2childlib1component30Component', () => {
  let component: Lib2childlib1component30Component;
  let fixture: ComponentFixture<Lib2childlib1component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
