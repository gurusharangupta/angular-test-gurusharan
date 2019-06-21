import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]>{

  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private routes: ActivatedRoute,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes: Recipe[] = this.recipeService.getRecipes();



    if (recipes.length === 0) {
      const id = +this.routes.snapshot.params['id'];
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }

}