import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmCheckBalanceComponent } from './atm-check-balance.component';

describe('AtmCheckBalanceComponent', () => {
  let component: AtmCheckBalanceComponent;
  let fixture: ComponentFixture<AtmCheckBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmCheckBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmCheckBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
