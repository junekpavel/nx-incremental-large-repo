import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component17Component } from './lib4childlib6component17.component';

describe('Lib4childlib6component17Component', () => {
  let component: Lib4childlib6component17Component;
  let fixture: ComponentFixture<Lib4childlib6component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
