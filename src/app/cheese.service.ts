import { Injectable } from '@angular/core';

import { Cheese } from './cheese';
import { CHEESES } from './mock-cheeses';

@Injectable()
export class CheeseService {
  getCheeses(): Promise<Cheese[]> {
    return Promise.resolve(CHEESES);
  }
}
