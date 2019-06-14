import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.selectedIngredient.subscribe(
      (ingredient: Ingredient) => {
        this.nameInputRef.nativeElement.value = ingredient.name;
        this.amountInputRef.nativeElement.value = ingredient.amount;
      }
    )
  }

  onAddIngredient() {
    const nameConst = this.nameInputRef.nativeElement.value;
    const amountConst = this.amountInputRef.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(nameConst, amountConst));

  }

  onDeleteIngredient() {
    let ingredient: Ingredient ={name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value};

this.shoppingListService.deleteIngredient(ingredient);
  }


}