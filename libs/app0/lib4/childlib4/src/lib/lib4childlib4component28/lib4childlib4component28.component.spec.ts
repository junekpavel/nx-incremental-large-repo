import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component28Component } from './lib4childlib4component28.component';

describe('Lib4childlib4component28Component', () => {
  let component: Lib4childlib4component28Component;
  let fixture: ComponentFixture<Lib4childlib4component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
