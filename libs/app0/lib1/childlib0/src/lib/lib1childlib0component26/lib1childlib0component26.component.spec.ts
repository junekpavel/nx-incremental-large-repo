import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component26Component } from './lib1childlib0component26.component';

describe('Lib1childlib0component26Component', () => {
  let component: Lib1childlib0component26Component;
  let fixture: ComponentFixture<Lib1childlib0component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
