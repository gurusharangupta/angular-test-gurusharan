import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  ingredientEditSubscription: Subscription;
  editMode = false;
  editItemNumber: number;
  editedItem: Ingredient;
  @ViewChild('f', { static: false }) slForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientEditSubscription = this.shoppingListService.selectedIngredient.subscribe(
      (index: number) => {
        this.editItemNumber = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });

      }
    );
  }

  onSubmit(form: NgForm) {
    const valueConst = form.value;
    const newIngredient = new Ingredient(valueConst.name, valueConst.amount);
    if (this.editMode === false) {
      this.shoppingListService.addIngredient(newIngredient);
    } else {
      this.shoppingListService.editIngredient(this.editItemNumber, newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editItemNumber);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.ingredientEditSubscription.unsubscribe();
  }



}