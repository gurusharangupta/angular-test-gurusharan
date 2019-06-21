import { Component, OnInit, Output, OnDestroy } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { AlertService } from '../shared/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  selectedPage = 'Recipe';
  statusMessage: string = '';
  status: string = '';
  alertType: string = 'alert ';
  subscription: Subscription
  constructor(private dataStorgeService: DataStorageService, private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.showAlert.subscribe(
      (alert) => {

        this.statusMessage = alert.message;
        this.status = alert.status;
        if (this.status == 'Success') this.alertType += 'alert-success alert-dismissible fade in';
        if (this.status == 'Error') this.alertType += 'alert-danger alert-dismissible fade in';

      }
    );
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
    this.subscription.unsubscribe();
  }
  hideAlert() {
    this.status = '';
    this.alertType = 'alert ';
  }


}