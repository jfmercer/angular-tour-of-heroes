import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cheese } from '../cheese';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): object {
    const cheeses: Cheese[] = [
      { id: 11, name: 'Brie' },
      { id: 12, name: 'Coulommiers' },
      { id: 13, name: 'Mimolette' },
      { id: 14, name: 'Neufchatel' },
      { id: 15, name: 'Gruyere' },
      { id: 16, name: 'Camembert' },
      { id: 17, name: 'Roquefort' },
      { id: 18, name: 'Pouigny-St-Pierre' },
      { id: 19, name: 'Haute-Savoie' },
      { id: 20, name: 'Emmental' }
    ];
    return { cheeses };
  }
}
