import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component45Component } from './lib4childlib6component45.component';

describe('Lib4childlib6component45Component', () => {
  let component: Lib4childlib6component45Component;
  let fixture: ComponentFixture<Lib4childlib6component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
