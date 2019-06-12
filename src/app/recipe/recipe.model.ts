import { Ingredient } from '../shared/ingredient.model';
export class Recipe {

  name: string;
  description: string;
  imagePath: string;
  ingredient: Ingredient[];

  public constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredient: Ingredient[]) { 
      this.name = name;
      this.description = description;
      this.imagePath = imagePath;
      this.ingredient = ingredient;
    }


}