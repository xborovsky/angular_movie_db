import { TestBed, inject } from '@angular/core/testing';

import { MovieExtractService } from './movie-extract.service';

describe('MovieExtractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieExtractService]
    });
  });

  it('should be created', inject([MovieExtractService], (service: MovieExtractService) => {
    expect(service).toBeTruthy();
  }));
});
