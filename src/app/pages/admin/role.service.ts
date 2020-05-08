import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CreateRole, Role, UpdateRole } from './models/role.model';
import { ModelType } from '../../shared/modelType.model';
import { SearchRequest, SearchResult } from '../../shared/crud';

const URL = `${environment.adminServiceUrl}/role`;

@Injectable()
export class RoleService {

  public sources: ModelType[] = [];
  public targets: ModelType[] = [];

  constructor(@SkipSelf() private http: HttpClient) {
  }

  findRoles(searchRequest: SearchRequest): Observable<SearchResult<Role>> {
    return this.http.post<SearchResult<Role>>(`${URL}/search`, searchRequest, {});
  }

  getAllRoles(): Observable<SearchResult<Role>> {
    return this.http.get<SearchResult<Role>>(URL);
  }

  findRoleById(roleId: number): Observable<Role> {
    return this.http.get<Role>(URL + `/${roleId}`);
  }

  createRole(createRole: CreateRole): Observable<Role> {
    console.log('Creating', createRole);
    return this.http.post<Role>(URL, createRole, {});
  }

  updateRole(updateRole: UpdateRole): Observable<any> {
    return this.http.put(URL, updateRole, {});
  }

  deleteRole(roleId: number): Observable<Role> {
    const url = `${URL}/${roleId}`;
    return this.http.delete<Role>(url);
  }
}
