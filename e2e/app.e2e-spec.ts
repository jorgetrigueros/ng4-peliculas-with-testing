import { Ng4PeliculasWithTestingPage } from './app.po';
import { PeliculasPage } from './peliculas.po';

describe('ng4-peliculas-with-testing App', () => {
  let page: Ng4PeliculasWithTestingPage;
  let peliculasPage: PeliculasPage;

  beforeEach(() => {
    page = new Ng4PeliculasWithTestingPage();
    peliculasPage = new PeliculasPage();
  });


  it('should display "Inicio" link', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Inicio');
  });

  it('should create new pelicula', () => {
    peliculasPage.navigateTo();
    new peliculasPage.createPelicula();
    // expect();
  });



});
