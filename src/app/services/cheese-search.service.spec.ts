import { TestBed, inject } from '@angular/core/testing';

import { CheeseSearchService } from './cheese-search.service';

describe('CheeseSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheeseSearchService]
    });
  });

  it('should be created', inject([CheeseSearchService], (service: CheeseSearchService) => {
    expect(service).toBeTruthy();
  }));
});
