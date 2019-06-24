import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipe/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeResolverService } from './recipe/recipe-resolver.service';
import { AlertService } from './shared/alert.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './shared/auth-interceptor.service';
import { AuthService } from './auth/auth.service';


const appRoutes: Routes = [
  { path: '', component: HelloComponent },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] }
      ,
    ]
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent }

]
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, HelloComponent, HeaderComponent, RecipeListComponent,
    RecipeDetailComponent, RecipeItemComponent, RecipesComponent,
    ShoppingListComponent, ShoppingEditComponent, HighlightDirective,
    RenderHighlightDirective, DropDownDirective, RecipeEditComponent, AuthComponent],
  bootstrap: [AppComponent],
  providers: [AlertService, LoggingService, DataStorageService, ShoppingListService, RecipeService, RecipeResolverService,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true

    }]
})
export class AppModule { }
