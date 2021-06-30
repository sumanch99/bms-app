import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewDebitCardsComponent } from './customer-view-debit-cards.component';

describe('CustomerViewDebitCardsComponent', () => {
  let component: CustomerViewDebitCardsComponent;
  let fixture: ComponentFixture<CustomerViewDebitCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewDebitCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewDebitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
