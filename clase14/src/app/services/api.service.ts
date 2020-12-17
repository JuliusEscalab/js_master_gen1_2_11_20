import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/icountry';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { ICountryData } from '../interfaces/icountry-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountries = (): Observable<ICountry[]> =>
    this.http
      .get<ICountry[]>(`${environment.baseUrl}/countries`)
      .pipe(
        map(countries => countries.sort(
          (a,b) => a.Country.localeCompare(b.Country))),
      )

  fetchCountryData = (slug: string): Observable<ICountryData[]> =>
    this.http.get<ICountryData[]>(`${environment.baseUrl}/country/${slug}`)
}
