import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas.component';
import { PeliculasRoutingModule } from 'app/peliculas/peliculas-routing.module';
import { PeliculasService } from './peliculas.service';

@NgModule({
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ],
  declarations: [ PeliculasComponent ],
  providers: [ PeliculasService ]
})
export class PeliculasModule { }
