import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForDebitCardComponent } from './apply-for-debit-card.component';

describe('ApplyForDebitCardComponent', () => {
  let component: ApplyForDebitCardComponent;
  let fixture: ComponentFixture<ApplyForDebitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForDebitCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForDebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
