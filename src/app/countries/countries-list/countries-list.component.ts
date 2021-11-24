import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CountriesModel } from "../countries.model"
import { CountriesService } from "../countries.service";

@Component({
  selector: "app-countries-list",
  templateUrl: "./countries-list.component.html",
  styleUrls: ["./countries-list.component.scss"]
})
export class CountriesListComponent implements OnInit {
  regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  countries!: CountriesModel[];
  searchCountry: boolean = false
  isLoading = false
  error: string = ''
  subscription: Observable<CountriesModel[]> = new Observable;

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    this.countries = []

    this.error = ''
    this.isLoading = true
    console.log(this.searchCountry);
    
    if (this.searchCountry != true) {
      console.log('not in search mode')
        this.countriesService.getCountries().subscribe(
        (countries: CountriesModel[]) => {
          console.log(countries)
          this.isLoading = false
          return this.countries = countries
        },
        errorRes => {
          this.error = errorRes
          //this.showErrorAlert(errorRes)
          console.log(errorRes)
          this.isLoading = false
        }
      )
    }else {
      console.log('search mode')
      this.subscription.subscribe(
        (countries: CountriesModel[]) => {
          this.isLoading = false
          console.log(countries)
          return this.countries = countries
        },
        errorRes => {
          this.error = errorRes
          //this.showErrorAlert(errorRes)
          console.log(errorRes)
          this.isLoading = false
        }
      )
    }
  }

  onKeyDown(event: any) {
    console.log(event.target.value)
    if (event.target.value != '') {
      this.searchCountry = true
      this.subscription = this.countriesService.getCountry(event.target.value)
      this.ngOnInit()
    } else {
      this.searchCountry = false
      this.subscription = this.countriesService.getCountries()
      this.ngOnInit()
    }
    this.error = ''
  }

  onSearchByRegion(region: any) {  
    this.error = ''  
    this.searchCountry = true
    this.subscription = this.countriesService.getCountriesByRegion(region.value)
    this.ngOnInit()
  }


}