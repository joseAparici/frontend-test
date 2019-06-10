import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BeersPagination} from '../model/beers-pagination';

@Injectable({
  providedIn: 'root'
})
export class BeersState {

  private _beers: Array<any> = [];
  beers$ = new BehaviorSubject<Array<any>>(this._beers);
  private _beer: any;
  beer$ = new BehaviorSubject<Array<any>>(this._beer);
  private _currentPagination: BeersPagination;


  constructor() { }

  get beers(): Array<any> {
    return this._beers;
  }

  set beers(value: Array<any>) {
    this._beers.push(...value);
    this.beers$.next(this._beers);
  }

  get beer(): any {
    return this._beer;
  }

  set beer(value: any) {
    this._beer = value;
    this.beer$.next(this._beer);
  }

  get currentPagination(): BeersPagination {
    return this._currentPagination;
  }

  set currentPagination(value: BeersPagination) {
    this._currentPagination = value;
  }
}
