import { TestBed } from '@angular/core/testing';

import { PlatformProfitService } from './platform-profit.service';

describe('PlatformProfitService', () => {
  let service: PlatformProfitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformProfitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
