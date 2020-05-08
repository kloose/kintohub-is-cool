import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = JSON.parse(localStorage.getItem(environment.accessTokenKey));
        if (request.headers.get('Authorization') == null) {
            if (currentUser && currentUser.access_token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.access_token}`
                    }
                });
            }

        }
        return next.handle(request);
    }
}
