import {Pagination} from '../state/beers.state-type';
import {FETCH_BEERS_RESPONSE, NEXT_BEERS_PAGE_REQUEST} from '../actions/beers.actions';
import {GenericAction} from '../../../models';
import {beersReducer} from './beers.reducer';
import {BEERS_MODULE_CONSTANTS} from '../../beers.module.config';
import any = jasmine.any;


describe('beersReducer', () => {
  let mocks: any;

  beforeEach(() => {
    loadMocks();
  });

  describe('FETCH_BEERS_RESPONSE', () => {
    it('should set beers list as payload received', () => {
      const action = new GenericAction(FETCH_BEERS_RESPONSE, mocks.payload);
      const result = beersReducer(mocks.initialState, action);
      expect(result.beers).toEqual([...mocks.initialState.beers, ...mocks.payload]);
    });
  });

  describe('NEXT_BEERS_PAGE_REQUEST', () => {
    it('should set page size to double if its first page request', () => {
      const action = new GenericAction(NEXT_BEERS_PAGE_REQUEST, any);
      const result = beersReducer(mocks.initialState, action);
      expect(result.pagination.pageNum).toEqual(mocks.initialState.pagination.pageNum);
      expect(result.pagination.pageSize).toEqual(mocks.initialState.pagination.pageSize * 2);
    });

    it('should set to next page if its not first page request', () => {
      const action = new GenericAction(NEXT_BEERS_PAGE_REQUEST, any);
      const result = beersReducer(mocks.secondPageState, action);
      expect(result.pagination.pageNum).toEqual(mocks.secondPageState.pagination.pageNum + 1);
      expect(result.pagination.pageSize).toEqual(mocks.secondPageState.pagination.pageSize);
    });
  });

  function loadMocks() {
    const initialPagination = <Pagination>{
      pageNum: 1,
      pageSize: BEERS_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE,
      currentItems: 0,
      hasMoreItems: true
    };

    const secondPagePagination = <Pagination>{
      pageNum: 2,
      pageSize: BEERS_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE,
      currentItems: 0,
      hasMoreItems: true
    };

    mocks = {
      initialState: {
        beers: [{id: 'initialStateTest', name: 'initialStateTestName'}],
        pagination: initialPagination
      },
      secondPageState: {
        beers: [{id: 'initialStateTest', name: 'initialStateTestName'}],
        pagination: secondPagePagination
      },
      payload: [
        {id: 'test', name: 'testName'},
        {id: 'test1', name: 'testName1'},
        {id: 'test2', name: 'testName2'},
        {id: 'test3', name: 'testName3'}
      ]
    };
  }
});
