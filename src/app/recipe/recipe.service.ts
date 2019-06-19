import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeService implements OnInit {

  public recipeChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [new Recipe(
  //   'Pizza',
  //   'Italian',
  //   'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1',
  //   [
  //     new Ingredient('Toppings', 1),
  //     new Ingredient('Base', 1)
  //   ]
  // ),
  // new Recipe(
  //   'Lasagna',
  //   'Belgian',
  //   'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1',
  //   [
  //     new Ingredient('Cheese', 1),
  //     new Ingredient('Fries', 20)
  //   ])];

  private recipes: Recipe[] = [];



  ngOnInit() {

  }
  constructor(private shoppingListService: ShoppingListService, private http: HttpClient) { }

  public getRecipes() {

    return this.recipes.slice();
  }

  public setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());

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

  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}