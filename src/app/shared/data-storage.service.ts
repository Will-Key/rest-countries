import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { catchError, map } from "rxjs/operators"
import { CountriesModel } from "../countries/countries.model";
import { CountryModel } from "../countries/country.model";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor( private http: HttpClient ) {}

  fetchCountries() {
    return this.http.get<CountriesModel[]>(
      'https://restcountries.com/v3.1/all'
    ).pipe(
      map(
        (res: CountriesModel[]) => {
          return res
        }
      )
    )
  }

  fetchCountry(name: string) {
    return this.http.get<CountryModel[]>(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`,
    ).pipe(
      map(
        country => {
          return country
        }
      )
    )
  }

  fetchCountriesByRegion(region: string) {
    return this.http.get<CountriesModel[]>(
      `https://restcountries.com/v3.1/region/${region}`
    ).pipe(
      map(
        country => {
          return country
        }
      )
    )
  }

}