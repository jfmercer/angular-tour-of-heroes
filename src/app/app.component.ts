import { Component } from '@angular/core';
import { Cheese } from './cheese';

const CHEESES: Cheese[] = [
  { id: 11, name: 'Brie' },
  { id: 12, name: 'Coulommiers' },
  { id: 13, name: 'Mimolette' },
  { id: 14, name: 'Neufchatel' },
  { id: 15, name: 'Gruyere' },
  { id: 16, name: 'Camembert' },
  { id: 17, name: 'Roquefort' },
  { id: 18, name: 'Pouigny-Saint-Pierre' },
  { id: 19, name: 'Haute-Savoie' },
  { id: 20, name: 'Emmental' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Cheeses';
  selectedCheese: Cheese;
  cheeses = CHEESES;

  onSelect(cheese: Cheese): void {
    this.selectedCheese = cheese;
  }
}
