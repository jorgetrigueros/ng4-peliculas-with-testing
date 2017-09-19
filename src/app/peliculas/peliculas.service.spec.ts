import { TestBed, inject, fakeAsync, tick, async, getTestBed } from '@angular/core/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  RequestMethod,
  HttpModule,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { PeliculasService } from './peliculas.service';
import { MockConnection } from '@angular/http/testing';

describe('PeliculasService', () => {
  // Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        PeliculasService,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
      ]
    });
  });

  it('should be created', inject([PeliculasService], (service: PeliculasService) => {
    expect(service).toBeTruthy();
  }));

  describe('test for getPeliculas', () => {

    it('should return all peliculas',
      inject([PeliculasService, MockBackend], fakeAsync((peliculasService, mockBackend) => {

        // Arrange
        let dataResponse, dataUrl, dataMethod;
        const peliculasMock = {
          results: [
            {
              id: 3,
              original_title: 'Spiderman I',
              title: 'Spiderman I',
              overview: 'Lorem ipsum dolor sit amet',
              backdrop_path: ''
            },
            {
              id: 4,
              original_title: 'Spiderman II',
              title: 'Spiderman II',
              overview: 'Lorem ipsum dolor sit amet',
              backdrop_path: ''
            }
          ]
        }
        const mockResponse = new ResponseOptions({ body: JSON.stringify(peliculasMock) });
        mockBackend.connections.subscribe(connection => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          connection.mockRespond(new Response(mockResponse));
        });

        // Act
        peliculasService.getPeliculas()
          .subscribe(response => {
            dataResponse = response;
          });
        tick();
        // Assert
        expect(dataResponse.length).toEqual(2);
        expect(dataMethod).toBe(RequestMethod.Get);
        expect(dataResponse[0].id).toEqual(3);
      }))
    );

  });


});
