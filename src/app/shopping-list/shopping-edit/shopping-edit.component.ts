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

      }
    );
  }

  onAddIngredient(form: NgForm) {
    const valueConst = form.value;
    this.shoppingListService.addIngredient(new Ingredient(valueConst.name, valueConst.amount));

  }

  onDeleteIngredient() {

  }

  ngOnDestroy() {
    this.ingredientEditSubscription.unsubscribe();
  }



}