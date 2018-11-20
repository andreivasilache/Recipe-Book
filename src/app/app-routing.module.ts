// special file for rutes
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    {path: '',
    component: HomeComponent
},
    {path: 'shoppingList',
        loadChildren: './shopping-list/shopping.module#ShoppingModule', // lazy loading init
    },

    {path: 'login',
    component: SigninComponent },
    {path: 'register',
    component: SignupComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
