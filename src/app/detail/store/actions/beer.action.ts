import {Action} from '@ngrx/store';
import {GenericAction} from '../../../models';

export const FETCH_BEER_REQUEST = '[Beer] fetch beer detail request';
export const FETCH_BEER_RESPONSE = '[Beer] fetch beer detail response';
export const FETCH_BEER_FAILED = '[Beer] fetch beer detail failed';

export const fetchBeerRequest = (beerId: number): Action => {
  return new GenericAction(FETCH_BEER_REQUEST, {beerId: beerId});
};

export const fetchBeerResponse = (beer): Action => {
  return new GenericAction(FETCH_BEER_RESPONSE, beer);
};

export const fetchBeerFailed = (): Action => {
  return new GenericAction(FETCH_BEER_FAILED);
};
