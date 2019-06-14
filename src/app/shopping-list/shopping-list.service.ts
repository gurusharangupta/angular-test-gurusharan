import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientList: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 2)];
  ingredientChanged = new EventEmitter<Ingredient[]>();
  selectedIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  public addIngredient(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
    this.ingredientChanged.emit(this.ingredientList.slice());
  }
  public getIngredient() {
    return this.ingredientList.slice();
  }

  public addIngredients(ingredient: Ingredient[]) {
    this.ingredientList.push(...ingredient);
    this.ingredientChanged.emit(this.ingredientList.slice());
    console.log(this.ingredientList);
  }

  public editIngredient(ingredient: Ingredient) {

    this.selectedIngredient.emit(ingredient);
  }

  public deleteIngredient(ingredient: Ingredient){
 let indexOfIngredient = this.ingredientList.indexOf(ingredient);
 this.ingredientList.splice(indexOfIngredient,1);
 this.ingredientChanged.emit(this.ingredientList.slice());
  }


}