import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountryCardComponent } from './countries/countries-list/country-card/country-card.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { FilterComponent } from './countries/filter/filter.component';
import { SearchComponent } from './countries/search/search.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatCardModule } from '@angular/material/card'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    CountriesComponent,
    CountriesListComponent,
    CountryCardComponent,
    CountryDetailsComponent,
    FilterComponent,
    SearchComponent,
    LoadingSpinnerComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
