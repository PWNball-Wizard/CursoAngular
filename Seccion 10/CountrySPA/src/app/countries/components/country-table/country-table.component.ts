import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {

  @Input()
  capitals: Country[] = [];

  redirecciona(codigo:string){
    console.log(codigo)
    this.route.navigateByUrl(`/countries/by/${codigo}`)
  }

  constructor(private route: Router){}

}
