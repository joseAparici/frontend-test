import {GenericAction} from '../../../../models';
import {FETCH_BEER_RESPONSE} from '../actions/beer.action';
import {beerReducer} from './beer.reducer';

describe('beerReducer', () => {
  let mocks: any;

  beforeEach(() => {
    loadMocks();
  });

  describe('FETCH_BEER_RESPONSE', () => {
    it('should set beers detail as payload received', () => {
      const action = new GenericAction(FETCH_BEER_RESPONSE, mocks.payload);
      const result = beerReducer(mocks.initialState, action);
      expect(result.beer).toEqual(mocks.payload);
    });
  });

  function loadMocks() {
    mocks = {
      initialState: {
        beer: undefined
      },
      payload: {id: 'test', name: 'testName'}
    };
  }
});
