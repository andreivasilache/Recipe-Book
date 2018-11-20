import { Component, OnInit } from '@angular/core';

import { Ingredient  } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.readIngredients();
    this.shoppingService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients; // subscribe to the change from service,and update the current array
        }
      );
  }

  onEditItem(i: number) {
    this.shoppingService.startedEditing.next(i);
  }

}
