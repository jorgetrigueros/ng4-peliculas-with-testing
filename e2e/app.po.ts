import { browser, element, by } from 'protractor';

export class Ng4PeliculasWithTestingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-header a[name="inicio"]')).getText();
  }
}
