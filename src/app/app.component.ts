import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LoggingService } from './shared/logging.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipe/recipe.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class AppComponent implements OnInit {
  loadPage = 'Recipe';

  ngOnInit() {
    this.authService.autoLogin();
  }
  constructor(private logging: LoggingService, private authService: AuthService) { }

  onPageClick(page: string) {
    this.loadPage = page;
    this.logging.logIt(page);

  }
}
