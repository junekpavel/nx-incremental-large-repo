import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component30Component } from './lib3childlib3component30.component';

describe('Lib3childlib3component30Component', () => {
  let component: Lib3childlib3component30Component;
  let fixture: ComponentFixture<Lib3childlib3component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
