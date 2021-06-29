import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyRdComponent } from './customer-my-rd.component';

describe('CustomerMyRdComponent', () => {
  let component: CustomerMyRdComponent;
  let fixture: ComponentFixture<CustomerMyRdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMyRdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyRdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
