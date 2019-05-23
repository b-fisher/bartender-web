import { Injectable } from '@angular/core';
import { Drink } from 'src/app/model/drink';
import { DRINKS } from '../drinks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor() { }

  public getDrink(drinkId: number): Observable<Drink> {

    DRINKS.subscribe((drinks: Drink[]) => {
      drinks.filter((drink: Drink) => {
        drink.id === drinkId;
      }).pop();
    });

    let drink: Observable<Drink>;

    return null;
  }
}