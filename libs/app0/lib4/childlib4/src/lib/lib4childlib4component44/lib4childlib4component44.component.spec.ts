import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component44Component } from './lib4childlib4component44.component';

describe('Lib4childlib4component44Component', () => {
  let component: Lib4childlib4component44Component;
  let fixture: ComponentFixture<Lib4childlib4component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
