import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component46Component } from './lib3childlib1component46.component';

describe('Lib3childlib1component46Component', () => {
  let component: Lib3childlib1component46Component;
  let fixture: ComponentFixture<Lib3childlib1component46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
