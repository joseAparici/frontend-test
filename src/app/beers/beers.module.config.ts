import {InjectionToken} from '@angular/core';
import {APP_CONSTANTS} from '../app.config';

export interface BeersModuleConfig {
  ENDPOINT: any;
}

export const BEERS_MODULE_CONSTANTS: BeersModuleConfig = {
  ENDPOINT: {
    BEERS: {
      GET: {
        URL: APP_CONSTANTS.BASE_ENDPOINT_URL + '/beers',
        QUERY_PARAMS: {
          PAGE_NUMBER: 'page',
          PAGE_SIZE: 'per_page'
        },
        DEFAULT_PAGE_SIZE: 20,
      }
    }
  }
};

export let BEERS_MODULE_CONFIG = new InjectionToken<BeersModuleConfig>('beers.module.config');
