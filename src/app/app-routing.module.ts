import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { DrinkListComponent } from './drink-list/drink-list.component';

const routes: Routes = [
  { path: 'drink/:id', component: DrinkDetailsComponent },
  { path: 'drink-list', component: DrinkListComponent },
  { path: '', redirectTo: '/drink-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
