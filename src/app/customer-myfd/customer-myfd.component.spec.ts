import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyfdComponent } from './customer-myfd.component';

describe('CustomerMyfdComponent', () => {
  let component: CustomerMyfdComponent;
  let fixture: ComponentFixture<CustomerMyfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMyfdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
