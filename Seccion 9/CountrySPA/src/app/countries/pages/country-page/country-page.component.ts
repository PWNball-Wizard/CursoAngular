import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit{

  //public id:string = '';
  public capitals?: Country;

  constructor(private activatedRoute: ActivatedRoute, private countriesService:CountriesService, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchByID(id))
    )
    .subscribe(country => {
      if(!country){
        return this.router.navigateByUrl('/countries');
      }
      this.capitals = country;
      return;
      //console.log(country)
      /* this.countriesService.searchByID(id).subscribe(capitals =>{
        this.capitals = capitals
        console.log(capitals)
      }) */
      //console.log('Params ',params.id)
      //this.id = id
      //this.searchByID(id)
  })
    //console.log(this.id)
  }

}
