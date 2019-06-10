
import { Action } from '@ngrx/store';
import { GenericAction } from '../../../models';
import {Pagination} from '../state/beers.state-type';


export const FETCH_BEERS_REQUEST = '[Beers] fetch list of beers request';
export const FETCH_BEERS_RESPONSE = '[Beers] fetch list of beers response';
export const FETCH_BEERS_FAILED = '[Beers] fetch list of beers failed';
export const NEXT_BEERS_PAGE_REQUEST = '[Beers] next page of beers request';


export const fetchBeersListRequest = (pagination: Pagination): Action => {
  return new GenericAction(FETCH_BEERS_REQUEST, {pagination: pagination});
};

export const fetchBeersListResponse = (beers): Action => {
  return new GenericAction(FETCH_BEERS_RESPONSE, beers);
};

export const fetchBeersListFailed = (): Action => {
  return new GenericAction(FETCH_BEERS_FAILED);
};

export const nextBeersPageRequest = (): Action => {
  return new GenericAction(NEXT_BEERS_PAGE_REQUEST);
};
