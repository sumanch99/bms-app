import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterestPlansComponent } from './view-interest-plans.component';

describe('ViewInterestPlansComponent', () => {
  let component: ViewInterestPlansComponent;
  let fixture: ComponentFixture<ViewInterestPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInterestPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInterestPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
