import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component33Component } from './lib4childlib8component33.component';

describe('Lib4childlib8component33Component', () => {
  let component: Lib4childlib8component33Component;
  let fixture: ComponentFixture<Lib4childlib8component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
