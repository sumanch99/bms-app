import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewStatementComponent } from './customer-view-statement.component';

describe('CustomerViewStatementComponent', () => {
  let component: CustomerViewStatementComponent;
  let fixture: ComponentFixture<CustomerViewStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
