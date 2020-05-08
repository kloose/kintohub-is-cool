import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, CreateCountry, UpdateCountry } from './models/country.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { SearchRequest, SearchResult } from '../../shared/crud';

const URL = `${environment.adminServiceUrl}/country`;

@Injectable()
export class CountryService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  findCountries(queryParams: SearchRequest): Observable<SearchResult<Country>> {
    const headers = new HttpHeaders();
    const accessToken = localStorage.getItem(environment.accessTokenKey);
    headers.set('Authorization', 'Bearer ' + accessToken);
    return this.http.post<SearchResult<Country>>(`${URL}/search`, queryParams, {headers});
  }

  countries(): Observable<Country[]> {
    return this.http.get<SearchResult<Country>>(URL)
      .pipe(map(res => res.results));
  }

  getAllCountries(): Observable<Country[]> {
    return this.http
      .get<SearchResult<Country>>(URL)
      .pipe(map(result => result.results));
  }

  findCountryById(countryId: number): Observable<Country> {
    return this.http.get<Country>(URL + `/${countryId}`);
  }

  createCountry(createCountry: CreateCountry): Observable<Country> {
    console.log('Creating', createCountry);
    return this.http.post<Country>(URL, createCountry, {});
  }

  updateCountry(updateCountry: UpdateCountry): Observable<any> {
    return this.http.put(URL, updateCountry, {});
  }

  deleteCountry(countryId: number): Observable<Country> {
    const url = `${URL}/${countryId}`;
    return this.http.delete<Country>(url);
  }
}
