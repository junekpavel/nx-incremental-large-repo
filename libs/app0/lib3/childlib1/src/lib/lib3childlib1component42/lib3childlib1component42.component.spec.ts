import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component42Component } from './lib3childlib1component42.component';

describe('Lib3childlib1component42Component', () => {
  let component: Lib3childlib1component42Component;
  let fixture: ComponentFixture<Lib3childlib1component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
