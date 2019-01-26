import { Injectable } from '@angular/core';
import { Drink } from '../../model/drink';
import { Observable, of } from 'rxjs';

const DRINKS: Observable<Drink[]> = of([
  new Drink('Whiskey Sour', 1),
  new Drink('Manhattan', 2),
  new Drink('Bourbon Sidecar', 3),
  new Drink('Dark and Stormy', 4),
  new Drink('Old Fashioned', 5)]
)

@Injectable({
  providedIn: 'root'
})
export class DrinkListService {

  constructor() { }

  public getDrinks(): Observable<Drink[]> {
    return DRINKS;
  }
}
