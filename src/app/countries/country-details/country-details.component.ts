import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  borders: string[] = []
  languages: string = ''
  currencies!: {
    name: string;
  }[];
  isLoading = false
  error: string = ''
  country: any
  countryName: string = ''
  subscription: Subscription = new Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    
    this.isLoading = true
    this.route.params.subscribe(
      (params: any) => {
        return this.countryName = params['name']
      }
    )

    this.subscription = this.countriesService.getCountry(this.countryName).subscribe(
      (country: any) => {
        this.borders = country[0].borders
        this.languages = (Object.values(country[0].languages)).join()
        this.currencies = Object.values(country[0].currencies)

        this.isLoading = false
        console.log(this.isLoading)
        return this.country = country[0]
      },
      errorRes => {
        this.error = errorRes
        //this.showErrorAlert(errorRes)
        console.log(errorRes)
        this.isLoading = false
      }
    )
  }

  goBack() {
    this.router.navigate(['/countries-list'])
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
