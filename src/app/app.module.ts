import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { BartenderComponent } from './bartender/bartender.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    DrinkDetailsComponent,
    BartenderComponent
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
