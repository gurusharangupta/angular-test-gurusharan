import { Component, OnInit, Output } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedPage = 'Recipe';

  constructor(private dataStorgeService: DataStorageService) { }

  ngOnInit() {
  }

  onRecipeClick() {
    //this.routeClick.emit('Recipe');
    this.selectedPage = 'Recipe';
  }

  onShoppingClick() {
    //this.routeClick.emit('Shopping');
    this.selectedPage = 'Shopping';
  }

  storeRecipe() {
    this.dataStorgeService.storeRecipes();
  }

  fetchRecipe(){
    this.dataStorgeService.fetchRecipes();
  }



}