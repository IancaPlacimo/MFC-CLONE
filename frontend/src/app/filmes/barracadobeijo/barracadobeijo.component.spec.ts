import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarracadobeijoComponent } from './barracadobeijo.component';

describe('BarracadobeijoComponent', () => {
  let component: BarracadobeijoComponent;
  let fixture: ComponentFixture<BarracadobeijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarracadobeijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarracadobeijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
