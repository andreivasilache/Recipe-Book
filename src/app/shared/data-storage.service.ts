import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipe/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class DataStorageService {

    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private auth: AuthService) {}

    storeRecipes() {
        const token = this.auth.getToken(); // recall token interogation on every request


        return this.http.put('https://ng-recipe-book-4fee7.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes() );
    }

    getRecipes() {
        const token = this.auth.getToken();


        return this.http.get('https://ng-recipe-book-4fee7.firebaseio.com/recipes.json?auth=' + token)
        .subscribe(
            (response: any[]) => {
                // check if there is no 'response' array on data input, and if isn't add it
                for (const responses of response) {
                    if ( !responses['ingredient'] ) {
                        responses['ingredient'] = [];
                        console.log(responses);
                    }
                }
                this.recipeService.setRecipes(response); // send recipes to the recipes service
            }
        );
    }
}
