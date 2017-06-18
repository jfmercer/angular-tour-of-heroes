import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Cheese } from '../cheese';

@Injectable()
export class CheeseSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Cheese[]> {
    return this.http
      .get(`app/cheeses/?name=${term}`)
      .map(res => res.json().data as Cheese[]);
  }

}
