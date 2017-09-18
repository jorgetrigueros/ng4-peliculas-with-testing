import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent ],
      imports: [ RouterTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Debe contener los links Inicio | Peliculas | Series
   */
  it('Should have the link with the title "inicio"', () => {
    const de = fixture.debugElement.query(By.css('a[name="inicio"'));
    const element = de.nativeElement;
    fixture.detectChanges();
    expect(element.textContent).toEqual('Inicio');
  });
  it('Should have the link with the title "Películas"', () => {
    const de = fixture.debugElement.query(By.css('a[name="peliculas"'));
    const element = de.nativeElement;
    fixture.detectChanges();
    expect(element.textContent).toEqual('Películas');
  });
  it('Should have the link with the title "Series"', () => {
    const de = fixture.debugElement.query(By.css('a[name="series"'));
    const element = de.nativeElement;
    fixture.detectChanges();
    expect(element.textContent).toEqual('Series');
  });


});
