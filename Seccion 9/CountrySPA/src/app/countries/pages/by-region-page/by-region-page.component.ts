import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public capitals: Country[] = [];

  searchByRegion(term:string){
    this.countriesService.searchByRegion(term).subscribe(capitals =>
      this.capitals = capitals
    )
  }

  constructor(private countriesService: CountriesService){}

}
