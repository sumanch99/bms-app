import { TestBed } from '@angular/core/testing';

import { HomeRouteGuardService } from './home-route-guard.service';

describe('HomeRouteGuardService', () => {
  let service: HomeRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
