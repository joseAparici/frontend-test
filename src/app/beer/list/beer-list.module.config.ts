import {InjectionToken} from '@angular/core';
import {APP_CONSTANTS} from '../../app.config';

export interface BeerListModuleConfig {
  ENDPOINT: any;
}

/**
 * The config object associated to beer list module
 * @constant
 * @type {BeerListModuleConfig}
 */
export const BEER_LIST_MODULE_CONSTANTS: BeerListModuleConfig = {
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

/**
 * The injection token to use on beer list module
 * @type {InjectionToken<BeerListModuleConfig>}
 */

export let BEER_LIST_MODULE_CONFIG = new InjectionToken<BeerListModuleConfig>('beer-list.module.config');
