import { Component, OnInit } from '@angular/core';
import { DrinkListService } from "../service/drink-list/drink-list.service";
import { Drink } from '../model/drink';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  public drinks: Drink[];

  constructor(private drinkListService: DrinkListService) { }

  ngOnInit() {
    this.drinks = this.drinkListService.getDrinks(); 
  }

}
