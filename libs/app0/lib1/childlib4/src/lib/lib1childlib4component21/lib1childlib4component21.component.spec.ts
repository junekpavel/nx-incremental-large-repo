import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component21Component } from './lib1childlib4component21.component';

describe('Lib1childlib4component21Component', () => {
  let component: Lib1childlib4component21Component;
  let fixture: ComponentFixture<Lib1childlib4component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
