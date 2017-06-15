import { Component, Input } from '@angular/core';
import { Cheese } from '../cheese';

@Component({
  selector: 'app-cheese-detail',
  templateUrl: './cheese-detail.component.html',
  styleUrls: ['./cheese-detail.component.css']
})
export class CheeseDetailComponent {
  @Input() cheese: Cheese;
}
