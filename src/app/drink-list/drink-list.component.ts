import { Component, OnInit } from '@angular/core';
import { DrinkListService } from '../service/drink-list/drink-list.service';
import { Drink } from '../model/drink';

@Component({
  selector: 'drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  public drinks: Drink[];

  constructor(private drinkListService: DrinkListService) { }

  ngOnInit() {
      this.drinkListService.getDrinks()
        .subscribe((drinks: Drink[]) => this.drinks = drinks);
  }

}
