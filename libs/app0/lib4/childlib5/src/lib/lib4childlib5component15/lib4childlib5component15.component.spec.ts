import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component15Component } from './lib4childlib5component15.component';

describe('Lib4childlib5component15Component', () => {
  let component: Lib4childlib5component15Component;
  let fixture: ComponentFixture<Lib4childlib5component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
