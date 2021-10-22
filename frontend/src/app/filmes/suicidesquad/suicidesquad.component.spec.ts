import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuicidesquadComponent } from './suicidesquad.component';

describe('SuicidesquadComponent', () => {
  let component: SuicidesquadComponent;
  let fixture: ComponentFixture<SuicidesquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuicidesquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuicidesquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
