import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component39Component } from './lib1childlib2component39.component';

describe('Lib1childlib2component39Component', () => {
  let component: Lib1childlib2component39Component;
  let fixture: ComponentFixture<Lib1childlib2component39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
