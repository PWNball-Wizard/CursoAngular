import { Component, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
  public capitals : Country[] = [];

  searchByCapital( term: string): void{
    console.log('Desde byCapital', term);
    this.countriesService.searchByCapital(term).subscribe(capitals => {
      console.log(capitals);
      this.capitals = capitals;
    });
    //para suscribirse a la respuesta y decirle que es de tipo Country[] y poder acceder a sus propiedades se hace de la siguiente manera
    // this.countryService.searchByCapital(term).subscribe((resp: Country[]) => {

  }

  constructor(private countriesService: CountriesService) { }

}
