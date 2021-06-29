import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApplyForRdComponent } from './customer-apply-for-rd.component';

describe('CustomerApplyForRdComponent', () => {
  let component: CustomerApplyForRdComponent;
  let fixture: ComponentFixture<CustomerApplyForRdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerApplyForRdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerApplyForRdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
