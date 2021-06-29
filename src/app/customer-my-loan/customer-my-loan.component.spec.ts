import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyLoanComponent } from './customer-my-loan.component';

describe('CustomerMyLoanComponent', () => {
  let component: CustomerMyLoanComponent;
  let fixture: ComponentFixture<CustomerMyLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMyLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
