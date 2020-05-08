import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Config, CreateConfig, UpdateConfig } from './models/config.model';
import { ModelType } from '../../shared/modelType.model';
import { SearchRequest, SearchResult } from '../../shared/crud';

const URL = `${environment.adminServiceUrl}/config`;

@Injectable()
export class ConfigService {

  public sources: ModelType[] = [];
  public targets: ModelType[] = [];

  constructor(@SkipSelf() private http: HttpClient) {
    this.setupSources();
    this.setupTargets()
  }

  setupSources() {
    this.sources.push(ModelType.CLIENT);
    this.sources.push(ModelType.COMPANY);
    this.sources.push(ModelType.PERSON);
  }

  setupTargets() {
    this.sources.push(ModelType.ADDRESS);
    this.sources.push(ModelType.COMPANY);
    this.targets.push(ModelType.EMAIL_ADDRESS);
    this.sources.push(ModelType.PERSON);
  }

  findConfigs(queryParams: SearchRequest): Observable<SearchResult<Config>> {
    return this.http.post<SearchResult<Config>>(`${URL}/search`, queryParams, {});
  }

  getAllConfigs(): Observable<SearchResult<Config>> {
    return this.http.get<SearchResult<Config>>(URL);
  }

  findConfigById(configId: number): Observable<Config> {
    return this.http.get<Config>(URL + `/${configId}`);
  }

  createConfig(createConfig: CreateConfig): Observable<Config> {
    console.log('Creating', createConfig);
    return this.http.post<Config>(URL, createConfig, {});
  }

  updateConfig(updateConfig: UpdateConfig): Observable<any> {
    return this.http.put(URL, updateConfig, {});
  }

  deleteConfig(configId: number): Observable<Config> {
    const url = `${URL}/${configId}`;
    return this.http.delete<Config>(url);
  }

  currencies() {
    const currencies = [];
    currencies.push('CHF');
    currencies.push('EUR');
    currencies.push('HKD');
    currencies.push('RMB');
    currencies.push('USD');
    return currencies;
  }
}
