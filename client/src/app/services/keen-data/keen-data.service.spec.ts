import { TestBed, inject } from '@angular/core/testing';

import { KeenDataService } from './keen-data.service';

describe('KeenDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeenDataService]
    });
  });

  it('should be created', inject([KeenDataService], (service: KeenDataService) => {
    expect(service).toBeTruthy();
  }));
});
