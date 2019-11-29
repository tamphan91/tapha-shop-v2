import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxRegisterComponent } from './components/register/register.component';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbIconModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { NgxTokenLoginComponent } from './components/token-login/token-login.component';
import { NgxTokenResetPasswordComponent } from './components/token-reset-password/token-reset-password.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NbIconModule,
        NbCardModule,
        NbLayoutModule,
        NbAuthModule
    ],
    declarations: [NgxRegisterComponent, NgxTokenLoginComponent, NgxTokenResetPasswordComponent]
})
export class NgxAuthModule {
}
