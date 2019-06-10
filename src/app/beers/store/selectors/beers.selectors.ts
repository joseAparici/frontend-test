import { createSelector } from '@ngrx/store';

import { DrinksState, getDrinksState } from '../index';
import { BeersState } from '../state/beers.state-type';


export const getBeers = (state: BeersState) => state.beers;
export const getCurrentPagination = (state: BeersState) => state.pagination;

export const beersState = createSelector(
  getDrinksState,
  (state: DrinksState) => state.beersState
);

export const getBeersSelector = createSelector(
  beersState,
  getBeers
);

export const getBeersPagination = createSelector(
  beersState,
  getCurrentPagination
);
