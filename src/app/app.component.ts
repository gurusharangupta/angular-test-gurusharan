import { Component, ViewEncapsulation } from '@angular/core';
import { LoggingService } from './shared/logging.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class AppComponent {
  loadPage = 'Recipe';

  constructor(private logging: LoggingService) { }

  onPageClick(page: string) {
    this.loadPage = page;
    this.logging.logIt(page);

  }
}
