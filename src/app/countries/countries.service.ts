import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { DataStorageService } from "../shared/data-storage.service";

import { CountriesModel } from "./countries.model";
import { CountryModel } from "./country.model";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries!: CountriesModel[]

  constructor(
    private dataStorageService: DataStorageService
  ) {}

  getCountries() {
    return this.dataStorageService.fetchCountries()
      .pipe(
        catchError(this.handleError),
        tap(
          (countries: CountriesModel[]) => {
            return this.countries = countries
          }
        )
      )
  }

  getCountry(name: string) {
    return this.dataStorageService.fetchCountry(name).pipe(
      catchError(this.handleError),
      map(
        (country: CountryModel[]) => {
          return this.countries = country
        }
      )
    )
  }

  getCountriesByRegion(region: string) {
    return this.dataStorageService.fetchCountriesByRegion(region).pipe(
      catchError(this.handleError),
      map(
        (countries: CountriesModel[]) => {
          return this.countries = countries
        }
      )
    )
  }


  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes)
    let errorMsg = "An error occurs, your request is not found or please verify your network connection";
    switch (errorRes.status) {
      case 404:
        errorMsg = 'Your request was not found, please verify!'
        break;
      case 500:
        errorMsg = 'An error occurs, please verify your network connection or contact the site admin!'
        break;
    }
    return throwError(errorMsg)
  }
}