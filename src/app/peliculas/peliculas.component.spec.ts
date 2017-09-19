import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions, ConnectionBackend } from '@angular/http';
import { PeliculasService } from './peliculas.service';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasComponent } from './peliculas.component';

describe('PeliculasComponent', () => {
  let component: PeliculasComponent;
  let fixture: ComponentFixture<PeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasComponent],
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the message when clicking on the "Crear película" button', () => {
    // Arrange
    const button = fixture.debugElement.query(By.css('button[name="btnCrearPelicula"]'));
    button.triggerEventHandler('click', null);
    // Act
    fixture.detectChanges();
    // Cuando se hace click en el boton es cuando 'existe' el label
    const de = fixture.debugElement.query(By.css('label[name="lblMessage"]'));
    const el = de.nativeElement;
    // Assert
    expect(el.textContent).toContain('Última película creada');
  });

});
