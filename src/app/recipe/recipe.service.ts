import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {

private recipes: Recipe[] = [new Recipe('Pizza', 'Italian', 'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1'),
  new Recipe('Fries', 'Belgian', 'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1')];
  constructor() { }

public getRecipes(){
  return this.recipes.slice();
}
}