import { TestBed } from '@angular/core/testing';

import { LikeArticlesService } from './like-articles.service';

describe('LikeArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikeArticlesService = TestBed.get(LikeArticlesService);
    expect(service).toBeTruthy();
  });
});
