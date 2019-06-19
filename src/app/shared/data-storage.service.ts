import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes: Recipe[] = this.recipeService.getRecipes();
    this.http.put('https://test-backend-8118b.firebaseio.com/recipes.json', recipes).subscribe(
      (response => {
        console.log( response);
      })
    );
  }

  public fetchRecipes() {
    return this.http.get<Recipe[]>('https://test-backend-8118b.firebaseio.com/recipes.json').subscribe(
      (recipes) => {
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      }
    )

  }

}