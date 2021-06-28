import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingLoanRequestComponent } from './view-pending-loan-request.component';

describe('ViewPendingLoanRequestComponent', () => {
  let component: ViewPendingLoanRequestComponent;
  let fixture: ComponentFixture<ViewPendingLoanRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPendingLoanRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingLoanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
