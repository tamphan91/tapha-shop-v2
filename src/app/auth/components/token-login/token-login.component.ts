import { Component } from '@angular/core';
import { NbTokenService, NbAuthJWTToken } from '@nebular/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'ngx-token-login',
    template: '<h1 id="title" class="title">is validating...</h1>',
})
export class NgxTokenLoginComponent {
    constructor(private nbTokenService: NbTokenService, private activatedRoute: ActivatedRoute, private router: Router) {
        const token = this.activatedRoute.snapshot.params['token'];
        this.nbTokenService.set(new NbAuthJWTToken(token, 'email', new Date()));
        this.router.navigate(['/']);
    }
}
