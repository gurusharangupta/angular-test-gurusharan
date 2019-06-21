import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../../shared/data-storage.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.fetchRecipes().subscribe( 
      recipes => {},
      error =>  {console.log('No data found');}
      );
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );

  }
  onSelected(index: number) {
    this.router.navigate(['/recipes', index], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}