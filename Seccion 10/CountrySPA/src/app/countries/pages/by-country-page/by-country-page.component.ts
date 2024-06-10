import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{

  public capitals : Country[] = [];
  public initialValue: string = '';

  searchByCountry(term:string){
    this.countriesService.searchByCountry(term).subscribe(capitals => {
      console.log(capitals);
      this.capitals = capitals;
    });
  }

  constructor(private countriesService:CountriesService){}
  ngOnInit(): void {
    this.capitals = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

}
