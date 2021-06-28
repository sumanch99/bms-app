import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmHomepageComponent } from './atm-homepage.component';

describe('AtmHomepageComponent', () => {
  let component: AtmHomepageComponent;
  let fixture: ComponentFixture<AtmHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
