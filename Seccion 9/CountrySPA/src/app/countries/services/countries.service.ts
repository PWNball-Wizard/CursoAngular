import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlAPI: string = 'https://restcountries.com/v3.1/';

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.urlAPI}capital/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
    );
    //pipe sirve para transformar la respuesta en algo que necesitamos
  }

  searchByCountry(term: string):Observable<Country[]>{
    const url = `${this.urlAPI}name/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
    );
  }

  searchByRegion(term: string):Observable<Country[]>{
    const url = `${this.urlAPI}region/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
    );
  }

  searchByID(term: string):Observable<Country | null>{
    const url = `${this.urlAPI}alpha/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(() => of(null))
    );
  }


  constructor(private http: HttpClient) { }
}
