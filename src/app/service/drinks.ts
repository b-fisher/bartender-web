import { Observable, of } from 'rxjs';
import { Drink } from '../model/drink';

//Temporary collection of all drinks
export const DRINKS: Observable<Drink[]> = of([
    new Drink('Whiskey Sour', 1),
    new Drink('Manhattan', 2),
    new Drink('Bourbon Sidecar', 3),
    new Drink('Dark and Stormy', 4),
    new Drink('Old Fashioned', 5)]
  );