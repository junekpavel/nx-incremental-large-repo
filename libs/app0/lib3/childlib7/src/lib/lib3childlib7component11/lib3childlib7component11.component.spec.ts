import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component11Component } from './lib3childlib7component11.component';

describe('Lib3childlib7component11Component', () => {
  let component: Lib3childlib7component11Component;
  let fixture: ComponentFixture<Lib3childlib7component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
