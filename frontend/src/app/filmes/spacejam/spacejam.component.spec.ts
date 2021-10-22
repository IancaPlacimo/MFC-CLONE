import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacejamComponent } from './spacejam.component';

describe('SpacejamComponent', () => {
  let component: SpacejamComponent;
  let fixture: ComponentFixture<SpacejamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacejamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacejamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
