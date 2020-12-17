import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/app/interfaces/icountry';
import { ICountryData } from 'src/app/interfaces/icountry-data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css'],
})
export class FetchComponent {

  countries: ICountry[];
  selectedCountryData: ICountryData[];

  constructor(private apiService: ApiService ) { }

  fetchCountries = ( ) => {
    this.apiService.fetchCountries().subscribe({
      next: countries => this.countries = countries,
    })
  }

  onSelectChange = (event: any) => {
    const { value: slug } = event;
    this.apiService.fetchCountryData(slug).subscribe({
      next: countryData => this.selectedCountryData = countryData,
    })
  }

}
