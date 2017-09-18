import { Ng4PeliculasWithTestingPage } from './app.po';

describe('ng4-peliculas-with-testing App', () => {
  let page: Ng4PeliculasWithTestingPage;

  beforeEach(() => {
    page = new Ng4PeliculasWithTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
