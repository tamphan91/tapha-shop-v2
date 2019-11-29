import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: NbAuthService, private router: Router) {
    }

    canActivate() {
        console.log('AuthGuard');
        return this.authService.isAuthenticatedOrRefresh()
            .pipe(
                tap(authenticated => {
                    console.log('AuthGuard 2', authenticated);
                    if (!authenticated) {
                        this.router.navigate(['auth/login']);
                    }
                }),
            );
    }
}