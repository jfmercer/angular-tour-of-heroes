import { TestBed, async, inject } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

import { Cheese } from '../cheese';

describe('Service: InMemoryData', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService]
    });
  });

  beforeEach(inject([InMemoryDataService], (srvc) => {
    service = srvc;
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('returns an array of Cheeses', () => {
    const cheeses: Cheese[] = [
      { id: 11, name: 'Brie' },
      { id: 12, name: 'Coulommiers' },
      { id: 13, name: 'Mimolette' },
      { id: 14, name: 'Neufchatel' },
      { id: 15, name: 'Gruyere' },
      { id: 16, name: 'Camembert' },
      { id: 17, name: 'Roquefort' },
      { id: 18, name: 'Pouigny-St-Pierre' },
      { id: 19, name: 'Haute-Savoie' },
      { id: 20, name: 'Emmental' }
    ];
    const expectedResponse: object = { cheeses };
    const response: object = service.createDb();
    expect(response).toEqual(expectedResponse);
  });
});
