import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib6component24Component } from './lib0childlib6component24.component';

describe('Lib0childlib6component24Component', () => {
  let component: Lib0childlib6component24Component;
  let fixture: ComponentFixture<Lib0childlib6component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
