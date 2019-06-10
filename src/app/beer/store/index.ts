import {BeerState} from './state/beer.state-type';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {beerReducer} from './reducers/beer.reducer';

export interface DrinkState {
  beerState: BeerState;
}

export const beerReducers: ActionReducerMap<DrinkState> = {
  beerState: beerReducer
};

export const getDrinkState = createFeatureSelector<DrinkState>('drink');
