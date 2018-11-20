import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  i: number;
  index: number;
  @ViewChild('AddElement') elementAdded: Recipe;
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
     private shoppingService: ShoppingService,
     private route: ActivatedRoute,
     private routing: Router) { }

  ngOnInit() {
   this.index = +this.route.snapshot.params['id'];
   this.route.params.subscribe(
     (params: Params) => {
       this.index = params['id'];
       this.recipe = this.recipeService.getRecipeByIndex(this.index);
     }
   );
  }

  addIngredients(recipe) {
    for ( this.i = 0 ; this.i <= recipe.length - 1 ; this.i++) {
      this.shoppingService.addIngredients(recipe[this.i]);
    }
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.index);
    this.routing.navigate(['/recipe']);
  }

}
