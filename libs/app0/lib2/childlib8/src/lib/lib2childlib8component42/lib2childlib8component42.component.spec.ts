import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component42Component } from './lib2childlib8component42.component';

describe('Lib2childlib8component42Component', () => {
  let component: Lib2childlib8component42Component;
  let fixture: ComponentFixture<Lib2childlib8component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
