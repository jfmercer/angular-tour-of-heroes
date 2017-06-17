import { Injectable } from '@angular/core';

import { Cheese } from './cheese';
import { CHEESES } from './mock-cheeses';

@Injectable()
export class CheeseService {
  getCheese(id: number): Promise<Cheese> {
    return this.getCheeses()
               .then(cheeses => cheeses.find(cheese => cheese.id === id))
  }
  getCheeses(): Promise<Cheese[]> {
    return Promise.resolve(CHEESES);
  }
}
