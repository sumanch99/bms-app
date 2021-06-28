import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllApprovedLoansComponent } from './view-all-approved-loans.component';

describe('ViewAllApprovedLoansComponent', () => {
  let component: ViewAllApprovedLoansComponent;
  let fixture: ComponentFixture<ViewAllApprovedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllApprovedLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllApprovedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
