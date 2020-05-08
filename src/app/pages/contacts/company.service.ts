import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, CreateCompany, UpdateCompany } from './models/company.model';
import { environment } from '../../../environments/environment';
import { SearchRequest, SearchResult } from '../../shared/crud';

const API_COMPANY_URL = `${environment.adminServiceUrl}/company`;


@Injectable()
export class CompanyService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  findCompanies(queryParams: SearchRequest): Observable<SearchResult<Company>> {

    const headers = new HttpHeaders();
    const accessToken = localStorage.getItem(environment.accessTokenKey);
    headers.set('Authorization', 'Bearer ' + accessToken);

    return this.http.post<SearchResult<Company>>(`${API_COMPANY_URL}/search`, queryParams, {headers});
  }

  getAllCompanies(): Observable<SearchResult<Company>> {
    return this.http.get<SearchResult<Company>>(API_COMPANY_URL);
  }

  findCompanyById(companyId: number): Observable<Company> {
    return this.http.get<Company>(API_COMPANY_URL + `/${companyId}`);
  }

  createCompany(createCompany: CreateCompany): Observable<Company> {
    console.log('Creating', createCompany);
    return this.http.post<Company>(API_COMPANY_URL, createCompany, {});
  }

  updateCompany(updateCompany: UpdateCompany): Observable<any> {
    return this.http.put(API_COMPANY_URL, updateCompany, {});
  }

  deleteCompany(companyId: number): Observable<Company> {
    const url = `${API_COMPANY_URL}/${companyId}`;
    return this.http.delete<Company>(url);
  }

}
