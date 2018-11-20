import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe.component';
import { EmptyDescriptionComponent } from './empty-description/empty-description.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/authGuard-service';

const recipeRoutes: Routes = [
    {path: 'recipe', component: RecipeComponent, children: [
        {path: '', component: EmptyDescriptionComponent},
        {path: 'new', component: EditComponentComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: EditComponentComponent, canActivate: [AuthGuard]}
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    exports: [
     RouterModule
    ]
})

export class RecipesRoutingModule { }
