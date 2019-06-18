import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  public recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [new Recipe(
    'Pizza',
    'Italian',
    'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1',
    [
      new Ingredient('Toppings', 1),
      new Ingredient('Base', 1)
    ]
  ),
  new Recipe(
    'Lasagna',
    'Belgian',
    'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1',
    [
      new Ingredient('Cheese', 1),
      new Ingredient('Fries', 20)
    ])];
  constructor(private shoppingListService: ShoppingListService) { }

  public getRecipes() {
    return this.recipes.slice();
  }

  public addIngredientsForShopping(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

  public getRecipeById(index: number) {
    return this.recipes.slice()[index];
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  public updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());

  }
}