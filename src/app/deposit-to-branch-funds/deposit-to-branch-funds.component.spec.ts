import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositToBranchFundsComponent } from './deposit-to-branch-funds.component';

describe('DepositToBranchFundsComponent', () => {
  let component: DepositToBranchFundsComponent;
  let fixture: ComponentFixture<DepositToBranchFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositToBranchFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositToBranchFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
