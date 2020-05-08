import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CreateUser, UpdateUser, User } from './models/user.model';
import { SearchRequest, SearchResult } from '../../shared/crud';
import { map } from 'rxjs/operators';

const URL = `${environment.adminServiceUrl}/user`;

@Injectable()
export class UserService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  findUsers(queryParams: SearchRequest): Observable<SearchResult<User>> {
    return this.http.post<SearchResult<User>>(`${URL}/search`, queryParams, {});
  }

  getAllUsers(): Observable<SearchResult<User>> {
    return this.http.get<SearchResult<User>>(URL);
  }

  users() {
    return this.http.get<SearchResult<User>>(URL).pipe(map((res) => res.results));
  }

  findUserById(userId: number): Observable<User> {
    return this.http.get<User>(URL + `/${userId}`);
  }

  createUser(createUser: CreateUser): Observable<User> {
    console.log('Creating', createUser);
    return this.http.post<User>(URL, createUser, {});
  }

  updateUser(updateUser: UpdateUser): Observable<any> {
    return this.http.put(URL, updateUser, {});
  }

  deleteUser(userId: number): Observable<User> {
    const url = `${URL}/${userId}`;
    return this.http.delete<User>(url);
  }
}
