import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component19Component } from './lib4childlib2component19.component';

describe('Lib4childlib2component19Component', () => {
  let component: Lib4childlib2component19Component;
  let fixture: ComponentFixture<Lib4childlib2component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
