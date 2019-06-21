import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertService } from '../../shared/alert.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private routes: ActivatedRoute, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipeById(+this.routes.snapshot.params['id']);
    this.routes.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(+this.routes.snapshot.params['id']);
        if(this.recipe == null){
           this.alertService.setAlert('Error','Recipe not found');
           console.log('recipe not found');
           this.router.navigate(['../'],{relativeTo: this.routes});
        }
      }
    );

  }

  addIngredientsToShopping() {
    this.recipeService.addIngredientsForShopping(this.recipe.ingredient);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}