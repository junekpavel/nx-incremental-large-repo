import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component14Component } from './lib4childlib6component14.component';

describe('Lib4childlib6component14Component', () => {
  let component: Lib4childlib6component14Component;
  let fixture: ComponentFixture<Lib4childlib6component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
