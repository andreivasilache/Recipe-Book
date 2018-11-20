import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingredientChanged = new EventEmitter<Ingredient[]>(); // resave a copy of current element after change (1)
    startedEditing = new Subject<number>();
   
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
      ]

      readIngredients() {
          return this.ingredients.slice();
      }

      getIngredients(index: number) {
          return this.ingredients[index];
      }

      addIngredients(element: Ingredient) {
        this.ingredients.push(element);
        this.ingredientChanged.emit(this.ingredients.slice());// resave a copy of current element after change (2)
    }

      updateIngredient(index: number, newIngredient: Ingredient) {
          this.ingredients[index] = newIngredient;
          this.ingredientChanged.next(this.ingredients.slice());
      }

      deleteIngredients(index: number) {
         this.ingredients.splice(index, 1);
         this.ingredientChanged.next(this.ingredients.slice());
      }

     
}