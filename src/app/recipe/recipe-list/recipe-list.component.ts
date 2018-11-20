import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { auth } from 'firebase';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscriberChanges: Subscription;

  isAuth: boolean;

  constructor(private recipeService: RecipeService, private authService: AuthService) {

  }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();

    this.subscriberChanges = this.recipeService.recipeChanged
    .subscribe(
      (newRecipe) => {
        this.recipes = newRecipe;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscriberChanges.unsubscribe();
  }

}
