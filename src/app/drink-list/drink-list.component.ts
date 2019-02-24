import { Component, OnInit } from '@angular/core';
import { DrinkListService } from '../service/drink-list/drink-list.service';
import { BasicDrink } from '../model/basic-drink';

@Component({
  selector: 'drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  public drinks: BasicDrink[];

  constructor(private drinkListService: DrinkListService) { }

  ngOnInit() {
      this.drinkListService.getDrinks()
        .subscribe((drinks: BasicDrink[]) => this.drinks = drinks);
  }

}
