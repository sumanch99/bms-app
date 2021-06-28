import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmWithdrawComponent } from './atm-withdraw.component';

describe('AtmWithdrawComponent', () => {
  let component: AtmWithdrawComponent;
  let fixture: ComponentFixture<AtmWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmWithdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
