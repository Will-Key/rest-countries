import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CountriesComponent } from './countries/countries.component'
import { CountryDetailsComponent } from './countries/country-details/country-details.component'

const routes: Routes = [
  {
    path: 'countries-list', component: CountriesComponent
  },
  {
    path: 'country-details/:name', component: CountryDetailsComponent
  },
  {
    path: '', redirectTo: '/countries-list', pathMatch: 'full'
  },
  { path: '**', component: CountriesComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}