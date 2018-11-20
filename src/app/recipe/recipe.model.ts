import { Ingredient } from '../shared/ingredients.model';

export class Recipe {
    public name: string;
    public description: string;
    public imgPath: string;
    public ingredient: Ingredient[];

    constructor(name: string, desc: string , imgPath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imgPath = imgPath;
        this.ingredient = ingredients;
    }
}