import {InjectionToken} from '@angular/core';
import {APP_CONSTANTS} from '../app.config';

const PATH_PARAM_BEER_ID = 'beerId';
export interface BeersModuleConfig {
  ROUTES: any;
  ENDPOINT: any;
}

export const BEERS_MODULE_CONSTANTS: BeersModuleConfig = {
  ROUTES: {
    EMPTY: '',
    BEERS: 'beers',
    BEER_DETAIL: 'beers/:beerId'

  },
  ENDPOINT: {
    BEERS: {
      GET: {
        URL: APP_CONSTANTS.BASE_URL + '/beers',
        QUERY_PARAMS: {
          PAGE_NUMBER: 'page',
          PAGE_SIZE: 'per_page'
        },
        DEFAULT_PAGE_NUMBER: 1,
        DEFAULT_PAGE_SIZE: 20,
      }
    },
    BEER: {
      GET: {
        URL: APP_CONSTANTS.BASE_URL + '/beers/' + PATH_PARAM_BEER_ID,
        PATH_PARAMS: {
          BEER_ID: PATH_PARAM_BEER_ID
        }
      }
    }
  }
};

export let BEERS_MODULE_CONFIG = new InjectionToken<BeersModuleConfig>('beers.module.config');
