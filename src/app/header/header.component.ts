import { Component, OnInit, Output, OnDestroy } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  selectedPage = 'Recipe';
 
  
  userSubscription: Subscription;
  isAuthenticated = false;
  constructor(private dataStorgeService: DataStorageService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    });
  
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

  fetchRecipe() {
    this.dataStorgeService.fetchRecipes().subscribe();

  }

  resetRecipe() {
    this.dataStorgeService.resetRecipes();

  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }

}