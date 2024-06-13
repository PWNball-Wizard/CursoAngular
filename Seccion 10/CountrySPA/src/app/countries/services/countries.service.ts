import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlAPI: string = 'https://restcountries.com/v3.1/';

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountry: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  private getCountriesRequest(url: string):Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      //delay(5000)
    );
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.urlAPI}capital/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCapital = {term, countries}),
      tap(() => this.saveToLocalStorage())
    )
    //pipe sirve para transformar la respuesta en algo que necesitamos
  }

  searchByCountry(term: string):Observable<Country[]>{
    const url = `${this.urlAPI}name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCountry = {term, countries}),
      tap(() => this.saveToLocalStorage())
    )
  }

  searchByRegion(region: Region):Observable<Country[]>{
    const url = `${this.urlAPI}region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion = {region, countries}),
      tap(() => this.saveToLocalStorage())
    )
  }

  searchByID(term: string):Observable<Country | null>{
    const url = `${this.urlAPI}alpha/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(() => of(null))
    );
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private loadToLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

  constructor(private http: HttpClient) { this.loadToLocalStorage() }

}