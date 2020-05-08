import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CreateOption, Option, UpdateOption } from './models/option.model';
import { ModelType } from '../../shared/modelType.model';
import { SearchRequest, SearchResult } from '../../shared/crud';

const URL = `${environment.adminServiceUrl}/option`;

@Injectable()
export class OptionService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  findOptions(queryParams: SearchRequest): Observable<SearchResult<Option>> {
    return this.http.post<SearchResult<Option>>(`${URL}/search`, queryParams, {});
  }

  getAllOptions(): Observable<SearchResult<Option>> {
    return this.http.get<SearchResult<Option>>(URL);
  }

  findOptionById(optionId: number): Observable<Option> {
    return this.http.get<Option>(URL + `/${optionId}`);
  }

  createOption(createOption: CreateOption): Observable<Option> {
    console.log('Creating', createOption);
    return this.http.post<Option>(URL, createOption, {});
  }

  updateOption(updateOption: UpdateOption): Observable<any> {
    return this.http.put(URL, updateOption, {});
  }

  deleteOption(optionId: number): Observable<Option> {
    const url = `${URL}/${optionId}`;
    return this.http.delete<Option>(url);
  }

  getFieldsBySourceAndTarget(source: ModelType, target: ModelType) {
    return this.http.get<string[]>(`${URL}/fields/${source}/${target}`);
  }
  getFieldsByTarget(target: ModelType) {
    return this.http.get<string[]>(`${URL}/fields/${target}`);
  }

  getTargetOptions(target: ModelType, targetField: string) {
    return this.http.get<Option[]>(`${URL}/${target}/${targetField}`);
  }

  getOptions(source: ModelType, target: ModelType, targetField: string) {
    return this.http.get<Option[]>(`${URL}/${source}/${target}/${targetField}`);
  }
}
