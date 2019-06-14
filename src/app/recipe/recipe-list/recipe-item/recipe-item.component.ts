import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers:[]
})
export class RecipeItemComponent implements OnInit {

@Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //let recipes: Recipe[] = this.recipeService.getRecipes();
    //this.recipe = recipes[this.activatedRoute.snapshot.params['id']];
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}