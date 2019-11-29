import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private authService: NbAuthService, private router: Router) {
    }

    canActivate() {
        console.log('LoginGuard');
        return this.authService.isAuthenticated()
            .pipe(
                map(authenticated => !authenticated),
                tap(isNotAuthenticated => {
                    console.log('isNotAuthenticated', isNotAuthenticated);
                    if (!isNotAuthenticated) {
                        this.router.navigate(['pages/dashboard']);
                    }
                }),
            );
    }
}