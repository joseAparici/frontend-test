import {GenericAction} from '../../../models';
import {FETCH_BEER_RESPONSE} from '../actions/beer.action';
import {BeerState} from '../state/beer.state-type';

const initialState: BeerState = {
  beer: undefined
};

export const beerReducer = (state = initialState, action: GenericAction) => {
  switch (action.type) {
    case FETCH_BEER_RESPONSE: {
      return <BeerState>{...state, beer: action.payload};
    }
    default:
      return state;
  }
};
