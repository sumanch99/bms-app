import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAtmRequestsComponent } from './view-atm-requests.component';

describe('ViewAtmRequestsComponent', () => {
  let component: ViewAtmRequestsComponent;
  let fixture: ComponentFixture<ViewAtmRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAtmRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAtmRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
