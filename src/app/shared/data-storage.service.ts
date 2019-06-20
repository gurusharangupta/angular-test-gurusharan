import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes: Recipe[] = this.recipeService.getRecipes();
    this.http.put('https://test-backend-8118b.firebaseio.com/recipes.json', recipes).subscribe(
      (response => {
        console.log('Store Recipe: ' + JSON.stringify(response));
      })
    );
  }

  resetRecipes() {
    const recipes: Recipe[] = this.recipeService.getRecipesReset();
    this.http.put('https://test-backend-8118b.firebaseio.com/recipes.json', recipes).subscribe(
      (response => {
        console.log('Store Recipe: ' + JSON.stringify(response));
      })
    );
  }

  public fetchRecipes() {
    return this.http.get<Recipe[]>('https://test-backend-8118b.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredient: recipe.ingredient ? recipe.ingredient : [] };
          });
        }),
        tap(recipes => {
          console.log('Fetch recipe: ' + JSON.stringify(recipes));
          this.recipeService.setRecipes(recipes);
        }));


  }

}