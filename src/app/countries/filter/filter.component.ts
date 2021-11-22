import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  
  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
  }

  onSearchByRegion(region: any) {
    this.countriesService.getCountriesByRegion(region.value)
  }

}
