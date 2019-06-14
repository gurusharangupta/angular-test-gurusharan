import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

@Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private routes: ActivatedRoute) { }

  ngOnInit() {
     this.recipe = this.recipeService.getRecipeFromName(this.routes.snapshot.params['name']);
     this.routes.params.subscribe(
       (recipe: Recipe) => {
         this.recipe = recipe;
       }
     );
   
  }

  addIngredientsToShopping(){
this.recipeService.addIngredientsForShopping(this.recipe.ingredient);
  }

}