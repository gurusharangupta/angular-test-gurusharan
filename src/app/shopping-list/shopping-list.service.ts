import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientList: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 2)];
  ingredientChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  public addIngredient(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
    this.ingredientChanged.emit(this.ingredientList.slice());
  }
  public getIngredient() {
    return this.ingredientList.slice();
  }


}