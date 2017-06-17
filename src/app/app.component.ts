import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-cheese></app-cheese>
  `
})
export class AppComponent {
  title = 'Tour of Cheeses';
}
