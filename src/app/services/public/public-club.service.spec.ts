import { TestBed } from '@angular/core/testing';

import { PublicClubService } from './public-club.service';

describe('PublicClubService', () => {
  let service: PublicClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
