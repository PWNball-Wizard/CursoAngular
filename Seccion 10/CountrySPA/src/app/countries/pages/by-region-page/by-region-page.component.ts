import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{

  public capitals: Country[] = [];
  public regions: Region[] = ['Africa','Americas','Asia','Oceania','Europe']
  public seleccionado: string = '';
  public initialValue: Region = '';

  searchByRegion(term:Region){
    this.countriesService.searchByRegion(term).subscribe(capitals =>{
      this.capitals = capitals
      this.seleccionado = term
  })
  }

  constructor(private countriesService: CountriesService){}
  ngOnInit(): void {
    this.capitals = this.countriesService.cacheStore.byRegion.countries;
    this.initialValue, this.seleccionado = this.countriesService.cacheStore.byRegion.region;
  }

}
