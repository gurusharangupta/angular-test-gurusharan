import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model'
export class RecipeService {

public recipeSelected = new EventEmitter<Recipe>()
private recipes: Recipe[] = [new Recipe(
  'Pizza',
   'Italian',
    'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1',
    [
      new Ingredient('Toppings',1),
       new Ingredient('Base',1)
      ]
    ),
  new Recipe(
    'Lasagna', 
    'Belgian',
     'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1',
     [
      new Ingredient('Cheese',1),
       new Ingredient('Fries',20)
      ])];
  constructor() { }

public getRecipes(){
  return this.recipes.slice();
}
}