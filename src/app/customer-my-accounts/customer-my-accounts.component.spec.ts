import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyAccountsComponent } from './customer-my-accounts.component';

describe('CustomerMyAccountsComponent', () => {
  let component: CustomerMyAccountsComponent;
  let fixture: ComponentFixture<CustomerMyAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMyAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
