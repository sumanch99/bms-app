import { TestBed } from '@angular/core/testing';

import { CustomerRouteGuardService } from './customer-route-guard.service';

describe('CustomerRouteGuardService', () => {
  let service: CustomerRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
