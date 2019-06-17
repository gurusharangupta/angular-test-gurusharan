import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers:[]
})
export class RecipeItemComponent implements OnInit {

@Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
    //let recipes: Recipe[] = this.recipeService.getRecipes();
    //this.recipe = recipes[this.activatedRoute.snapshot.params['id']];
  }

 

}