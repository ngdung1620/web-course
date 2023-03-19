import { TestBed } from '@angular/core/testing';

import { LeaningService } from './leaning.service';

describe('LeaningService', () => {
  let service: LeaningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
