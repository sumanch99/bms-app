import { TestBed } from '@angular/core/testing';

import { CustomerHttpInterceptorService } from './customer-http-interceptor.service';

describe('CustomerHttpInterceptorService', () => {
  let service: CustomerHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
