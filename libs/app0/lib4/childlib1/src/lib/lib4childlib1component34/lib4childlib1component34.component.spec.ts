import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component34Component } from './lib4childlib1component34.component';

describe('Lib4childlib1component34Component', () => {
  let component: Lib4childlib1component34Component;
  let fixture: ComponentFixture<Lib4childlib1component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
