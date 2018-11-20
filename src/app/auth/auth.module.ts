import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './authGuard-service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        AuthGuard
    ]
})

export class AuthModule {}
