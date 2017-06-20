import { TestBed,
         inject,
         fakeAsync,
         tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http,
         ConnectionBackend,
         BaseRequestOptions,
         RequestMethod,
         Response,
         ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { CheeseSearchService } from './cheese-search.service';
import { Cheese } from '../cheese';

describe('CheeseSearchService', () => {
  let mockBackend: MockBackend;
  let cheeseSearchService: CheeseSearchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        CheeseSearchService,
        { provide: Http,
          useFactory: (backend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(inject([MockBackend, Http], (mb: MockBackend, http: Http) => {
    mockBackend = mb;
    cheeseSearchService = new CheeseSearchService(http);
  }));

  it('should be created', inject([CheeseSearchService], (service: CheeseSearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should search the Cheese array',
    // inject([CheeseSearchService, MockBackend],
    fakeAsync(() => {
      const swiss: Cheese = {name: 'swiss', id: 7};
      // let response: Observable<[Cheese]>;
      mockBackend.connections.subscribe(connection => {
        const resObj: object = { body: {data: [swiss]}};
        expect(connection.request.url).toBe('app/cheeses/?name=swiss');
        expect(connection.request.method).toBe(RequestMethod.Get);
        const mockResponse: ResponseOptions = new ResponseOptions(resObj);
        connection.mockRespond(new Response(mockResponse));
      });
      cheeseSearchService.search('swiss')
        .subscribe(result => {
          expect(result).toEqual([swiss]);
        });
    })
  );
});
