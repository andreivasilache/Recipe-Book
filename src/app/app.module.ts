import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './recipe/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';

import { RecipesModule } from './recipe/recipes.module';
import { AppRoutingModule } from './app-routing.module';
import { RecipesRoutingModule } from './recipe/recipe-routes.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RecipesModule,
    RecipesRoutingModule,
    SharedModule,
    AppRoutingModule, // render route from his specific location

    AuthModule
  ],
  providers: [
    ShoppingService,
    RecipeService,
    DataStorageService,
    AuthService,
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
