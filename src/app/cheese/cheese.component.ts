import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Cheese } from '../cheese';
import { CheeseService } from '../cheese.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css'],
  providers: [CheeseService]
})
export class CheeseComponent implements OnInit {
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
