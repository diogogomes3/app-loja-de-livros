import { TestBed } from '@angular/core/testing';

import { StorageAdaptorService } from './storage-adaptor.service';

describe('StorageAdaptorService', () => {
  let service: StorageAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
