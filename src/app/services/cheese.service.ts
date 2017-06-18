import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cheese } from '../cheese';

@Injectable()
export class CheeseService {
  private cheesesUrl = 'api/cheeses';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(name: string): Promise<Cheese> {
    return this.http
      .post(this.cheesesUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Cheese)
      .catch(this.handleError);
  }

  getCheese(id: number): Promise<Cheese> {
    const url = `${this.cheesesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Cheese)
      .catch(this.handleError);
  }

  getCheeses(): Promise<Cheese[]> {
    return this.http.get(this.cheesesUrl)
      .toPromise()
      .then(response => response.json().data as Cheese[])
      .catch(this.handleError);
  }

  update(cheese: Cheese): Promise<Cheese> {
    const url = `${this.cheesesUrl}/${cheese.id}`;
    return this.http
      .put(url, JSON.stringify(cheese), { headers: this.headers })
      .toPromise()
      .then(() => cheese)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.cheesesUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occurred', error);
    return Promise.reject(error.message || error);
  }
}
