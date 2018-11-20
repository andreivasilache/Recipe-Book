import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,  OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  edditedItemIndex: number;
  edditedItem: Ingredient;

  onAddItem(f: NgForm) {
    const newIngredient = new Ingredient(f.value.name, f.value.amount);
    if ( this.editMode === false ) {
      this.shoppingService.addIngredients(newIngredient);
    } else {
      this.shoppingService.updateIngredient(this.edditedItemIndex, newIngredient);
    }
    this.onClear();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    if ( this.editMode ) {
      this.shoppingService.deleteIngredients(this.edditedItemIndex);
      this.onClear();
    }
  }

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.edditedItemIndex = index; // save current index
          this.edditedItem = this.shoppingService.getIngredients(index); // search by index,  on service for selected element

          this.shoppingListForm.setValue({
            // set the values
            'name' : this.edditedItem.name,
            'amount' : this.edditedItem.amount
          });
        }
      );
  }

  ngOnDestroy() {
    this.editMode = false;
    this.subscription.unsubscribe();
  }

}
