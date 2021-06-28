import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInterestComponent } from './change-interest.component';

describe('ChangeInterestComponent', () => {
  let component: ChangeInterestComponent;
  let fixture: ComponentFixture<ChangeInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
