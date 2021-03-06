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
import { AlertService } from './shared/alert/alert.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthService } from './auth/auth.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AlertComponent } from './shared/alert/alert.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
   
  ],
  declarations: [AppComponent, HelloComponent, HeaderComponent, RecipeListComponent,
    RecipeDetailComponent, RecipeItemComponent, RecipesComponent,
    ShoppingListComponent, ShoppingEditComponent, HighlightDirective,
    RenderHighlightDirective, DropDownDirective, RecipeEditComponent, AuthComponent, LoadingSpinnerComponent, AlertComponent],
  bootstrap: [AppComponent],
  providers: [AlertService, LoggingService, DataStorageService, ShoppingListService, RecipeService, RecipeResolverService, AuthService, AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true


    }]
})
export class AppModule { }
