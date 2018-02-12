import { TestBed, inject } from '@angular/core/testing';

import { FileUploadService } from './fileupload.service';

describe('FileuploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploadService]
    });
  });

  it('should be created', inject([FileUploadService], (service: FileUploadService) => {
    expect(service).toBeTruthy();
  }));
});
