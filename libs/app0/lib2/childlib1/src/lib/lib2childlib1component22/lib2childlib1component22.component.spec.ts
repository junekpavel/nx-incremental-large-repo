import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component22Component } from './lib2childlib1component22.component';

describe('Lib2childlib1component22Component', () => {
  let component: Lib2childlib1component22Component;
  let fixture: ComponentFixture<Lib2childlib1component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
