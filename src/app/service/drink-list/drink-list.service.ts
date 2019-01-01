import { Injectable } from '@angular/core';
import { Drink } from '../../model/drink';

const DRINKS: Drink[] = [
  { id: 1, name: 'Whiskey Sour' },
  { id: 2, name: 'Manhattan' },
  { id: 3, name: 'Bourbon Sidecar'},
  { id: 4, name: 'Dark and Stormy' },
  { id: 5, name: 'Old Fashioned' }
]

@Injectable({
  providedIn: 'root'
})
export class DrinkListService {

  constructor() { }

  public getDrinks(): Drink[] {
    return DRINKS;
  }
}
