import { browser, element, by } from 'protractor';

export class PeliculasPage {
    navigateTo() {
        return browser.get('/peliculas/pelis');
    }

    createPelicula() {
        // Accedemos al campo titulo y le enviamos el titulo de la pelicula
        element(by.css('input[name="titulo"]')).sendKeys('Frozen');
        // Accedemos al campo descripcion y se la enviamos
        element(by.css('input[name="descripcion"]')).sendKeys('Descripcion Frozen');
        // Marcamos el checkBox como seleccionado
        element(by.css('[id="chkTituloOriginal"]')).click();
        // Accedemos al boton y hacemos clic
        element(by.css('button[name="btnCrearPelicula"]')).click();
    }
}
