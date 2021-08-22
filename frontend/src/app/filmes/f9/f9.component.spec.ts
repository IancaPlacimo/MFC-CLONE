import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F9Component } from './f9.component';

describe('F9Component', () => {
  let component: F9Component;
  let fixture: ComponentFixture<F9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
