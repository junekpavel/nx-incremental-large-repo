import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component46Component } from './lib4childlib1component46.component';

describe('Lib4childlib1component46Component', () => {
  let component: Lib4childlib1component46Component;
  let fixture: ComponentFixture<Lib4childlib1component46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
