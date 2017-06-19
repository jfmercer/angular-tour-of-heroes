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

import { CheeseService } from './cheese.service';
import { Cheese } from '../cheese';

fdescribe('CheeseService', () => {
  let cheese: Cheese;

  beforeEach(() => {
    cheese = {
      name: 'Chucky Cheese',
      id: 7
    }
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        CheeseService,
        { provide: Http,
          useFactory: (backend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should be created', inject([CheeseService], (service: CheeseService) => {
    expect(service).toBeTruthy();
  }));

  it('GETs one cheese', inject([CheeseService, MockBackend],
                              fakeAsync((cheeseService, mockBackend) => {
    spyOn(cheeseService, 'handleError');
    let response;
    expectUrl(mockBackend, 'api/cheeses/7', cheese, RequestMethod.Get)
    cheeseService.getCheese(7).then((success) => {
      response = success;
    });
    tick();
    expect(response.id).toEqual(7);
    expect(cheeseService.handleError).not.toHaveBeenCalled();
  })));

  it('GETs all the cheeses', inject([CheeseService, MockBackend],
                                    fakeAsync((cheeseService, mockBackend) => {
    spyOn(cheeseService, 'handleError');
    let response;
    expectUrl(mockBackend, 'api/cheeses', [cheese], RequestMethod.Get);
    cheeseService.getCheeses()
      .then((success) => {
        response = success
      });
    tick();
    expect(response).toEqual([cheese]);
    expect(cheeseService.handleError).not.toHaveBeenCalled();
  })));

  it('creates a cheese', inject([CheeseService, MockBackend],
                                   fakeAsync((cheeseService, mockBackend) => {
    spyOn(cheeseService, 'handleError');
    let response;
    expectUrl(mockBackend, 'api/cheeses', cheese.name, RequestMethod.Post);
    cheeseService.create(cheese.name)
      .then((success) => {
        response = success;
      });
    tick();
    expect(response).toEqual('Chucky Cheese');
    expect(cheeseService.handleError).not.toHaveBeenCalled();
  })));

  it('updates a cheese', inject([CheeseService, MockBackend],
                         fakeAsync((cheeseService, mockBackend) => {
    spyOn(cheeseService, 'handleError');
    let response;
    const newCheese = { name: 'foo', id: 7 };
    expectUrl(mockBackend, 'api/cheeses/7', newCheese, RequestMethod.Put);
    cheeseService.update(newCheese)
      .then((success) => {
        response = success;
      });
    tick();
    expect(response).toEqual(newCheese);
    expect(cheeseService.handleError).not.toHaveBeenCalled();
  })));

  it('deletes cheese', inject([CheeseService, MockBackend],
                         fakeAsync((cheeseService, mockBackend) => {
    spyOn(cheeseService, 'handleError');
    let response;
    expectUrl(mockBackend, 'api/cheeses/7', null, RequestMethod.Delete);
    cheeseService.delete(7)
      .then((success) => {
        response = success;
      });
    tick();
    expect(response).toBeNull();
    expect(cheeseService.handleError).not.toHaveBeenCalled();
  })));

  it('catches errors', inject([CheeseService, MockBackend],
                         fakeAsync((cheeseService, mockBackend) => {
    spyOn(cheeseService, 'handleError');
    mockBackend.connections.subscribe(connection => {
      connection.mockError(new Error('error'));
    });
    cheeseService.delete(7);
    tick();
    expect(cheeseService.handleError).toHaveBeenCalled();
  })));
});

function expectUrl(mockBackend: MockBackend, url: string, data: any, reqMethod: RequestMethod) {
  mockBackend.connections.subscribe(connection => {
    expect(connection.request.url).toBe(url);
    expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
    expect(connection.request.method).toBe(reqMethod);
    const mockResponse: ResponseOptions = new ResponseOptions({ body: { data: data } });
    connection.mockRespond(new Response(mockResponse));
  });
}
