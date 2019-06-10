import {BeersState, Pagination} from '../state/beers.state-type';
import {FETCH_BEERS_RESPONSE, NEXT_BEERS_PAGE_REQUEST} from '../actions/beers.actions';
import {GenericAction} from '../../../models';
import {BEERS_MODULE_CONSTANTS} from '../../beers.module.config';


const initialState: BeersState = {
  beers: [],
  pagination: <Pagination>{
    pageNum: 1,
    pageSize: BEERS_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE,
    currentItems: 0,
    hasMoreItems: true
  }
};


export const beersReducer = (state = initialState, action: GenericAction) => {
  switch (action.type) {
    case FETCH_BEERS_RESPONSE: {
      const beersState = <BeersState>{
        ...state,
        beers:
          state.pagination.pageNum === 1 && state.pagination.pageSize > BEERS_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE ?
            action.payload : [...state.beers, ...action.payload]
      };
      beersState.pagination.currentItems = beersState.beers.length;
      beersState.pagination.hasMoreItems = action.payload.length > 0;
      return beersState;
    }
    case NEXT_BEERS_PAGE_REQUEST: {
      return <BeersState>{
        ...state,
        pagination: <Pagination>{
          ...state.pagination,
          pageNum:
            state.pagination.pageNum === 1 && state.pagination.pageSize === BEERS_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE ?
              state.pagination.pageNum : state.pagination.pageNum + 1,
          pageSize:
            state.pagination.pageNum === 1 && state.pagination.pageSize === BEERS_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE ?
              state.pagination.pageSize * 2 : state.pagination.pageSize
        }
      };
    }

    default:
      return state;
  }
};
