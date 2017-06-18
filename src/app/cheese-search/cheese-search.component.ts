import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CheeseSearchService } from '../services/cheese-search.service';
import { Cheese } from '../cheese';

@Component({
  selector: 'app-cheese-search',
  templateUrl: './cheese-search.component.html',
  styleUrls: ['./cheese-search.component.css'],
  providers: [CheeseSearchService]
})
export class CheeseSearchComponent implements OnInit {
  cheeses: Observable<Cheese[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private cheeseSearchService: CheeseSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cheeses = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.cheeseSearchService.search(term)
        // or the observable of empty cheeses if there was no search term
        : Observable.of<Cheese[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Cheese[]>([]);
      });
  }

  gotoDetail(hero: Cheese): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

