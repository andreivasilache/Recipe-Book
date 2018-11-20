import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';

export class RecipeService {

    recipeChanged = new Subject<Recipe[]>(); // for inital array update

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('ayyy',
        'I love this one',
        'https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg',
        [
            new Ingredient('Bread',  1),
            new Ingredient('Salt', 2)
        ]
        ),
        new Recipe('Happy pug',
        "He's so hapyyyyyyyyyyyy",
        'http://www.ilovepugs.co.uk/wp-content/uploads/2018/05/HAPPY-PUG-BLANK-CARD-.jpg',
        [
            new Ingredient('Bread',  1),
            new Ingredient('Salt', 2)
        ]
        )
      ];

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice(); // send a copy of the current recipes,don't modify it
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        console.log(this.recipes.slice());

        this.recipeChanged.next(this.recipes.slice());   // update the inital array
      }

      updateRecipe(recipe: Recipe, index) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());   // update the inital array
      }

      getRecipeByIndex(num) {
          return this.recipes[num];
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipeIngredient(recipeId, ingredientId) {
          this.recipes[recipeId].ingredient.slice(ingredientId, 1 );
      }

}
