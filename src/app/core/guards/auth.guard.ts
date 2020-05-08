import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      // console.log('Checking canActivate');
        const currentUser = this.authenticationService.currentUser();
        if (currentUser) {
            // console.log("User is logged in")
            return true;
        }

        console.log('User is not lgoged in, redirecting to login');
        this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
