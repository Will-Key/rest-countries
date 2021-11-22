import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
  }

  onKeyDown(event: any) {
    if (event.key == "Enter") {
      this.countriesService.getCountry(event.value)
    }
  }

}
