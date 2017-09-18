import { PeliculasService } from './peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.getPeliculas();
  }

  getPeliculas() {
    this.peliculasService.getPeliculas()
      .subscribe(
      data => this.peliculas = data,
      error => console.log(error)
      );
  }

}
