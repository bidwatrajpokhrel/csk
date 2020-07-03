import { TestBed } from '@angular/core/testing';

import { AdmissionInfoService } from './admission-info.service';

describe('AdmissionInfoService', () => {
  let service: AdmissionInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
