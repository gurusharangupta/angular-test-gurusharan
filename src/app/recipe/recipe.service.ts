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
  private recipes: Recipe[] = [];

  // new Recipe(
  //     'Pizza',
  //     'Italian',
  //     'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1',
  //     [
  //       new Ingredient('Toppings', 1),
  //       new Ingredient('Base', 1)
  //     ]
  //   ),
  //   new Recipe(
  //     'Lasagna',
  //     'Belgian',
  //     'https://i2.wp.com/www.staceyhomemaker.com/wp-content/uploads/2019/01/Vegan-Keto-Recipes-.jpg?resize=683%2C1024&ssl=1',
  //     [
  //       new Ingredient('Cheese', 1),
  //       new Ingredient('Fries', 20)
  //     ])

  ngOnInit() {
    this.fetchRecipe();
  }
  constructor(private shoppingListService: ShoppingListService, private http: HttpClient) { }

  public getRecipes() {
    this.fetchRecipe();
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

    this.http.post('https://test-backend-8118b.firebaseio.com/posts.json', recipe).subscribe(
      (responseData) => {
        console.log(responseData);
      }
    );
  }

  private fetchRecipe() {
    this.http.get<{ [key: string]: Recipe }>('https://test-backend-8118b.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postArray: Recipe[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push(responseData[key]);
          }
        }
        console.log(postArray)
        return postArray;
      }))
      .subscribe(
        (recipe: Recipe[]) => {

          this.recipes = recipe;
          console.log(this.recipes);
        }
      )
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