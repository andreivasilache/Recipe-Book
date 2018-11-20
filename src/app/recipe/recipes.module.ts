import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { EmptyDescriptionComponent } from './empty-description/empty-description.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipe-routes.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
        EmptyDescriptionComponent,
        EditComponentComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})

export class RecipesModule {

}
