import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredientEditSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
this.shoppingListService.selectedIngredient
  }

  onAddIngredient(form: NgForm) {
    const valueConst = form.value;
    this.shoppingListService.addIngredient(new Ingredient(valueConst.name, valueConst.amount));

  }

  onDeleteIngredient() {
  
  }


}