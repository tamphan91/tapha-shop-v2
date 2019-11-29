import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { NgxRegisterComponent } from './auth/components/register/register.component';
import { AuthGuard } from './auth/guard/auth-guard.service';
import { NgxTokenLoginComponent } from './auth/components/token-login/token-login.component';
import { NgxTokenResetPasswordComponent } from './auth/components/token-reset-password/token-reset-password.component';
import { LoginGuard } from './auth/guard/login-guard.service';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: NbLoginComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'register',
        component: NgxRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        canActivate: [AuthGuard],
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
      {
        path: 'token/:token/login',
        component: NgxTokenLoginComponent,
      },{
        path: 'token/:token/reset-password',
        component: NgxTokenResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
