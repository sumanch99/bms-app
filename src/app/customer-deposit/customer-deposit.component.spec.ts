import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDepositComponent } from './customer-deposit.component';

describe('CustomerDepositComponent', () => {
  let component: CustomerDepositComponent;
  let fixture: ComponentFixture<CustomerDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
