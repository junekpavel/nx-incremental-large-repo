import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component39Component } from './lib3childlib7component39.component';

describe('Lib3childlib7component39Component', () => {
  let component: Lib3childlib7component39Component;
  let fixture: ComponentFixture<Lib3childlib7component39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
