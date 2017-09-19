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
  pelicula: Pelicula;
  created: boolean = false;

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

  crearPelicula(title, descripcion) {
    console.log(title.value);
    const titulo = title.value;
    const pelicula: Pelicula = new Pelicula(45, titulo, titulo, descripcion.value, '');
    this.created = true;
  }

}
