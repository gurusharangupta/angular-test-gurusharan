import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './hello.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipe/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { LoggingService } from './shared/logging.service';
import { Routes, RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HelloComponent },
  {
    path: 'recipes', component: RecipesComponent, canActivate: [AuthGuardService], children: [
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] }
      ,
    ]
  },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: AuthComponent }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }