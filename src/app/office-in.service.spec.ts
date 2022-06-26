import { TestBed } from '@angular/core/testing';

import { OfficeInService } from './office-in.service';

describe('OfficeInService', () => {
  let service: OfficeInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
