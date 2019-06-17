import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipeById(+this.routes.snapshot.params['id']);
    this.routes.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipeById(+this.routes.snapshot.params['id']);
      }
    );

  }

  addIngredientsToShopping() {
    this.recipeService.addIngredientsForShopping(this.recipe.ingredient);
  }

}