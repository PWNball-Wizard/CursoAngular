import { Component, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{
  public capitals : Country[] = [];
  public loaded:boolean = true;
  public initialValue: string = '';

  searchByCapital( term: string): void{
    this.loaded = false;
    console.log('Desde byCapital', term);
    this.countriesService.searchByCapital(term).subscribe(capitals => {
      console.log(capitals);
      this.capitals = capitals;
      this.loaded = true
    });
    //para suscribirse a la respuesta y decirle que es de tipo Country[] y poder acceder a sus propiedades se hace de la siguiente manera
    // this.countryService.searchByCapital(term).subscribe((resp: Country[]) => {

  }

  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.capitals = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

}
