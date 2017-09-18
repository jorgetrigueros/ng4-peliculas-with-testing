import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as Globals from '../globals';
import { Pelicula } from './pelicula';

@Injectable()
export class PeliculasService {
  private headers = new Headers();
  private urlApi = 'https://api.themoviedb.org/3/discover/movie';

  constructor(private http: Http) {
    this.headers.append('Accept', 'application/json');
  }

  getPeliculas(): Observable<Pelicula[]> {
    const params = '?api_key=' + Globals.urlApiKey + '&language=es-ES&primary_release_year=2017&sort_by=vote_average.desc';
    return this.http.get(this.urlApi + params, { headers: this.headers })
      .map(this.parseResponse);
  }

  parseResponse(response: any): Pelicula[] {
    if (!response.json() || !response.json().results) { return []; }

    return response.json().results.map(
      jsonPelicula => new Pelicula(jsonPelicula.id,
        jsonPelicula.original_title,
        jsonPelicula.title,
        jsonPelicula.overview,
        jsonPelicula.backdrop_path)
    );
  }

  /*   makeOptions() {
      const headers = new Headers();
      this.headers.append('api_key', Globals.urlApiKey);
      return {
        headers: headers
      }
    } */

}
