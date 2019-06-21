import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { map, tap } from 'rxjs/operators';
import { AlertService } from './alert.service';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private alertService: AlertService) { }

  storeRecipes() {
    const recipes: Recipe[] = this.recipeService.getRecipes();
    this.http.put('https://test-backend-8118b.firebaseio.com/recipes.json',
      recipes,
      {
        headers: new HttpHeaders({ 'Cutom-Header': 'Hello' })
      })
      .subscribe(
        (response) => {
          this.alertService.setAlert('Success', 'Your Data has been stored');
          console.log('Store Recipe: ' + JSON.stringify(response));
        },
        (error) => {
          this.alertService.setAlert('Error', 'Error storing recipes');

        }
      );
  }

  resetRecipes() {
    const recipes: Recipe[] = this.recipeService.getRecipesReset();
    this.http.put('https://test-backend-8118b.firebaseio.com/recipes.json', recipes).
    subscribe(
      (response) => {
        this.alertService.setAlert('Success', 'Your recipe has been reset');
        console.log('Store Recipe: ' + JSON.stringify(response));
      },
      (error) => {
        this.alertService.setAlert('Error', 'Error Reseting recipes');

      }
    );
  }

  public fetchRecipes() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    return this.http.get<Recipe[]>('https://test-backend-8118b.firebaseio.com/recipes.json',
      {
        params: searchParams
      })
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