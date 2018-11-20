import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {


  id: number;
  editMode = false;
  editComponentForm: FormGroup;


  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let recipeName = '' ;
    let recipeImgPath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByIndex(this.id);

      recipeName = recipe.name;
      recipeImgPath = recipe.imgPath;
      recipeDescription = recipe.description;


      if ( recipe.ingredient ) {

        for (const ingredient of recipe.ingredient) {

          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount,
                [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );

        }

      }
    }

    this.editComponentForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imgPath': new FormControl(recipeImgPath, Validators.required),
      'ingredient': recipeIngredients
    });


  }

  onSubmitForm() {
    // const recipe = new Recipe(
    //   this.editComponentForm.value['title'],
    //   this.editComponentForm.value['imgUrl'],
    //   this.editComponentForm.value['description'],
    //   this.editComponentForm.value['ingredients']
    //   );

    if (this.editMode) {
      // push to array
      this.recipeService.updateRecipe(this.editComponentForm.value, this.id);
    } else {
      // update
      this.recipeService.addRecipe(this.editComponentForm.value);
    }
      this.cancelForm();

  }

  cancelForm() {
    this.router.navigate(['../']);
  }

  getControls() {
    // send information from editComponentForm via function
    return  (<FormArray>this.editComponentForm.get('ingredient')).controls;
  }

  addIngredient() {
    (<FormArray>this.editComponentForm.get('ingredient')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount' : new FormControl(null,
          [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ]
          )
      })
    );
  }

  deleteIngredient(i: number) {
    console.log(i);
   (<FormArray>this.editComponentForm.get('ingredient')).removeAt(i);
  }
}
