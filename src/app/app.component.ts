import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Cheese } from './cheese';
import { CheeseService } from './cheese.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CheeseService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Cheeses';
  selectedCheese: Cheese;
  cheeses: Cheese[];

  constructor(private cheeseService: CheeseService) {}

  onSelect(cheese: Cheese): void {
    this.selectedCheese = cheese;
  }

  getCheeses(): void {
    this.cheeseService.getCheeses()
      .then(cheeses => this.cheeses = cheeses);
  }

  ngOnInit(): void {
    this.getCheeses();
  }
}
