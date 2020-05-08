import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CreateFlag, Flag, UpdateFlag } from './models/flag.model';
import { SearchRequest, SearchResult } from '../../shared/crud';

const URL = `${environment.adminServiceUrl}/flag`;

@Injectable()
export class FlagService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  findFlags(queryParams: SearchRequest): Observable<SearchResult<Flag>> {
    return this.http.post<SearchResult<Flag>>(`${URL}/search`, queryParams, {});
  }

  getAllFlags(): Observable<SearchResult<Flag>> {
    return this.http.get<SearchResult<Flag>>(URL);
  }

  findFlagById(flagId: number): Observable<Flag> {
    return this.http.get<Flag>(URL + `/${flagId}`);
  }

  createFlag(createFlag: CreateFlag): Observable<Flag> {
    console.log('Creating', createFlag);
    return this.http.post<Flag>(URL, createFlag, {});
  }

  updateFlag(updateFlag: UpdateFlag): Observable<any> {
    return this.http.put(URL, updateFlag, {});
  }

  deleteFlag(flagId: number): Observable<Flag> {
    const url = `${URL}/${flagId}`;
    return this.http.delete<Flag>(url);
  }
}
