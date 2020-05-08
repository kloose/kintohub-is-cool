import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePerson, Person, UpdatePerson } from './models/person.model';
import { environment } from '../../../environments/environment';
import { ModelType } from '../../shared/modelType.model';
import { SearchRequest, SearchResult } from '../../shared/crud';

const API_PERSON_URL = `${environment.adminServiceUrl}/person`;


@Injectable()
export class PersonService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  findPeople(queryParams: SearchRequest): Observable<SearchResult<Person>> {
    const headers = new HttpHeaders();
    const accessToken = localStorage.getItem(environment.accessTokenKey);
    headers.set('Authorization', 'Bearer ' + accessToken);
    return this.http.post<SearchResult<Person>>(`${API_PERSON_URL}/search`, queryParams, {headers});
  }

  getAllPeople(): Observable<SearchResult<Person>> {
    return this.http.get<SearchResult<Person>>(API_PERSON_URL);
  }

  findPersonById(personId: number): Observable<Person> {
    return this.http.get<Person>(API_PERSON_URL + `/${personId}`);
  }

  createPerson(createPerson: CreatePerson): Observable<Person> {
    console.log('Creating', createPerson);
    return this.http.post<Person>(API_PERSON_URL, createPerson, {});
  }

  updatePerson(updatePerson: UpdatePerson): Observable<any> {
    return this.http.put(API_PERSON_URL, updatePerson, {});
  }

  deletePerson(personId: number): Observable<Person> {
    const url = `${API_PERSON_URL}/${personId}`;
    return this.http.delete<Person>(url);
  }

  findPeopleByModel(modelType: ModelType, modelId: string) {
    return this.http.get<Person[]>(API_PERSON_URL + `/${modelType}/${modelId}`);
  }
}
