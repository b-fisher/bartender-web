import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasicDrink } from 'src/app/model/basic-drink';

const DRINKS: Observable<BasicDrink[]> = of([
  new BasicDrink('Whiskey Sour', 1),
  new BasicDrink('Manhattan', 2),
  new BasicDrink('Bourbon Sidecar', 3),
  new BasicDrink('Dark and Stormy', 4),
  new BasicDrink('Old Fashioned', 5)]
);

@Injectable({
  providedIn: 'root'
})
export class DrinkListService {

  constructor() { }

  public getDrinks(): Observable<BasicDrink[]> {
    return DRINKS;
  }
}
