import { Injectable } from '@angular/core';
import { User } from '../models/auth.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// import { getFirebaseBackend } from '../../authUtils';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    user: User;

    constructor(private http: HttpClient) {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
      return new User();
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string): Observable<User> {

      if (environment.oauthEnabled) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        const body = new HttpParams()
          .set('username', email)
          .set('password', password)
          .set('grant_type', password)
          .set('client_id', environment.clientId);

        return this.http.post<User>(environment.idpTokenService, body.toString(), {headers});
      } else {
        return this.http.post<User>(`${environment.gateway}/api/login`, {
          username: email,
          password
        }, {});
      }

    }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email: string, password: string) {
        // return getFirebaseBackend().registerUser(email, password).then((response: any) => {
        //     const user = response;
        //     return user;
        // });
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        // return getFirebaseBackend().forgetPassword(email).then((response: any) => {
        //     const message = response.data;
        //     return message;
        // });
    }

    /**
     * Logout the user
     */
    logout() {
      localStorage.removeItem(environment.accessTokenKey);
    }
}

