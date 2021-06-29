import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountTransferComponent } from './customer-account-transfer.component';

describe('CustomerAccountTransferComponent', () => {
  let component: CustomerAccountTransferComponent;
  let fixture: ComponentFixture<CustomerAccountTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
