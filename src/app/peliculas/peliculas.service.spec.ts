import { TestBed, inject } from '@angular/core/testing';

import { PeliculasService } from './peliculas.service';

describe('PeliculasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeliculasService]
    });
  });

  it('should ...', inject([PeliculasService], (service: PeliculasService) => {
    expect(service).toBeTruthy();
  }));
});
