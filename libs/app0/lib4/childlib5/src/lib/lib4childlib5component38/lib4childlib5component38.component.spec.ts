import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component38Component } from './lib4childlib5component38.component';

describe('Lib4childlib5component38Component', () => {
  let component: Lib4childlib5component38Component;
  let fixture: ComponentFixture<Lib4childlib5component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
