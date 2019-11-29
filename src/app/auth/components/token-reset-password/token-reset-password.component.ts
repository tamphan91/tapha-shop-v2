import { Component } from '@angular/core';
import { NbTokenService, NbAuthJWTToken } from '@nebular/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'ngx-token-reset-password',
    template: '<h1 id="title" class="title">is validating...</h1>',
})
export class NgxTokenResetPasswordComponent {
    constructor(private nbTokenService: NbTokenService, private activatedRoute: ActivatedRoute, private router: Router) {
        console.log('token-reset-password');
        const token = this.activatedRoute.snapshot.params['token'];
        this.nbTokenService.set(new NbAuthJWTToken(token, 'email', new Date()));
        this.router.navigate(['/auth/reset-password']);
    }
}
