import { TestBed, inject } from '@angular/core/testing';

import { MovieDbThumbnailService } from './movie-db-thumbnail.service';

describe('MovieDbThumbnailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDbThumbnailService]
    });
  });

  it('should be created', inject([MovieDbThumbnailService], (service: MovieDbThumbnailService) => {
    expect(service).toBeTruthy();
  }));
});
