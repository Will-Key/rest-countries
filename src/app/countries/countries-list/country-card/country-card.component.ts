import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CountriesModel } from '../../countries.model';


@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input()country!: CountriesModel;
  @Input()index!: number;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onDetailsCountry(country: string) {
    this.router.navigate(['country-details', country])
  }

}
