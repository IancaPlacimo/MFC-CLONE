import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstreiasComponent } from './estreias.component';

describe('EstreiasComponent', () => {
  let component: EstreiasComponent;
  let fixture: ComponentFixture<EstreiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstreiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstreiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
