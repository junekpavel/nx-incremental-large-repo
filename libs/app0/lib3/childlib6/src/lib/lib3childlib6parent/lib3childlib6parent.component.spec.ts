import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6parentComponent } from './lib3childlib6parent.component';

describe('Lib3childlib6parentComponent', () => {
  let component: Lib3childlib6parentComponent;
  let fixture: ComponentFixture<Lib3childlib6parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6parentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
