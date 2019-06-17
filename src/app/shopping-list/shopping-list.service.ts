import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {

  ingredientList: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 2)];
  ingredientChanged = new Subject<Ingredient[]>();
  selectedIngredient = new Subject<number>();
  constructor() { }

  public addIngredient(ingredient: Ingredient) {
    for (let ingredientIndex of this.ingredientList) {
      if (ingredientIndex.name == ingredient.name) {
        console.log('Ingredient already present');
        return;
      }
    }
    this.ingredientList.push(ingredient);
    this.ingredientChanged.next(this.ingredientList.slice());
  }
  public getIngredient() {
    return this.ingredientList.slice();
  }

  public addIngredients(ingredient: Ingredient[]) {
    this.ingredientList.push(...ingredient);
    this.ingredientChanged.next(this.ingredientList.slice());
    console.log(this.ingredientList);
  }
  public editIngredient(index: number, ingredient: Ingredient) {
    this.ingredientList[index] = ingredient;
    this.ingredientChanged.next(this.ingredientList.slice());
  }

  public deleteIngredient(index: number) {
    this.ingredientList.splice(index, 1);
    this.ingredientChanged.next(this.ingredientList.slice());
  }

  public getIngredientByIndex(index: number) {
    return this.ingredientList[index];
  }


}