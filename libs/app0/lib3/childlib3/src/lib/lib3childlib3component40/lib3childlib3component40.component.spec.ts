import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component40Component } from './lib3childlib3component40.component';

describe('Lib3childlib3component40Component', () => {
  let component: Lib3childlib3component40Component;
  let fixture: ComponentFixture<Lib3childlib3component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
