import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component14Component } from './lib3childlib3component14.component';

describe('Lib3childlib3component14Component', () => {
  let component: Lib3childlib3component14Component;
  let fixture: ComponentFixture<Lib3childlib3component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
