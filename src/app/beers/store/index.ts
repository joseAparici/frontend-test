import {BeersState} from './state/beers.state-type';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {beersReducer} from './reducers/beers.reducer';


export interface DrinksState {
  beersState: BeersState;
}

export const beersReducers: ActionReducerMap<DrinksState> = {
  beersState: beersReducer
};

export const getDrinksState = createFeatureSelector<DrinksState>(
  'drinks'
);



