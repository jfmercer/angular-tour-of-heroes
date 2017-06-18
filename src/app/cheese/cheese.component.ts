import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private cheeseService: CheeseService,
    private router: Router) {}

  ngOnInit(): void {
    this.getCheeses();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCheese.id]);
  }

  onSelect(cheese: Cheese): void {
    this.selectedCheese = cheese;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cheeseService.create(name)
      .then(cheese => {
        this.cheeses.push(cheese);
        this.selectedCheese = null;
      })
  }

  getCheeses(): void {
    this.cheeseService.getCheeses()
      .then(cheeses => this.cheeses = cheeses);
  }

  delete(cheese: Cheese): void {
    this.cheeseService
      .delete(cheese.id)
      .then(() => {
        this.cheeses = this.cheeses.filter(c => c !== cheese);
        if (this.selectedCheese === cheese) { this.selectedCheese = null; }
      })
  }
}
