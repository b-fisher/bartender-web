import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    DrinkDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
