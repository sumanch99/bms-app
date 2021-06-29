import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWithdrawComponent } from './customer-withdraw.component';

describe('CustomerWithdrawComponent', () => {
  let component: CustomerWithdrawComponent;
  let fixture: ComponentFixture<CustomerWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerWithdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
