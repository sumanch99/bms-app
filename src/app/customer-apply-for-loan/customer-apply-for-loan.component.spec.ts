import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApplyForLoanComponent } from './customer-apply-for-loan.component';

describe('CustomerApplyForLoanComponent', () => {
  let component: CustomerApplyForLoanComponent;
  let fixture: ComponentFixture<CustomerApplyForLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerApplyForLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerApplyForLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
