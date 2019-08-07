import {BeerState} from '../state/beer.state-type';
import {createSelector} from '@ngrx/store';
import {DrinkState, getDrinkState} from '../index';


export const getBeer = (state: BeerState) => state.beer;

export const beerState = createSelector(
  getDrinkState,
  (state: DrinkState) => state.beerState
);

export const getBeerSelector = createSelector(
  beerState,
  getBeer
);
