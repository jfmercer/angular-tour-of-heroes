import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Cheese } from '../cheese';
import { CheeseService } from '../cheese.service';

@Component({
  selector: 'app-cheese-detail',
  templateUrl: './cheese-detail.component.html',
  styleUrls: ['./cheese-detail.component.css']
})
export class CheeseDetailComponent implements OnInit {
  cheese: Cheese;

  constructor(
    private cheeseService: CheeseService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.cheeseService.getCheese(+params['id']))
      .subscribe(cheese => this.cheese = cheese);
  }

  goBack(): void {
    this.location.back();
  }
}
