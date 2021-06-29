import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCheckBalanceComponent } from './customer-check-balance.component';

describe('CustomerCheckBalanceComponent', () => {
  let component: CustomerCheckBalanceComponent;
  let fixture: ComponentFixture<CustomerCheckBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCheckBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCheckBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
