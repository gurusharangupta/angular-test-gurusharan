import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipe/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HighlightDirective } from './custom/highlight.directive';
import { RenderHighlightDirective } from './custom/render-highlight.directive';
import { LoggingService } from './shared/logging.service';
import { DropDownDirective } from './custom/drop-down.directive';
import { Routes, RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', component: HelloComponent },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: 'new', component: RecipeEditComponent},
       { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent}
      ,
    ]
  },
  { path: 'shopping', component: ShoppingListComponent }

]
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, HelloComponent, HeaderComponent, RecipeListComponent,
    RecipeDetailComponent, RecipeItemComponent, RecipesComponent,
    ShoppingListComponent, ShoppingEditComponent, HighlightDirective,
    RenderHighlightDirective, DropDownDirective, RecipeEditComponent],
  bootstrap: [AppComponent],
  providers: [LoggingService]
})
export class AppModule { }
