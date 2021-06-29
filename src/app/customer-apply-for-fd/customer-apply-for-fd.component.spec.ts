import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApplyForFdComponent } from './customer-apply-for-fd.component';

describe('CustomerApplyForFdComponent', () => {
  let component: CustomerApplyForFdComponent;
  let fixture: ComponentFixture<CustomerApplyForFdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerApplyForFdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerApplyForFdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
