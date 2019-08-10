import {InjectionToken} from '@angular/core';
import {APP_CONSTANTS} from '../../app.config';

/**
 * Path param name associated to beer id
 * @constant
 * @type {string}
 */
const PATH_PARAM_BEER_ID = 'beerId';

export interface BeerDetailModuleConfig {
  ENDPOINT: any;
}

/**
 * The config object associated to beer detail module
 * @constant
 * @type {BeerDetailModuleConfig}
 */
export const BEER_DETAIL_MODULE_CONSTANTS: BeerDetailModuleConfig = {
  ENDPOINT: {
    BEER: {
      GET: {
        URL: APP_CONSTANTS.BASE_ENDPOINT_URL + '/beers/' + PATH_PARAM_BEER_ID,
        PATH_PARAMS: {
          BEER_ID: PATH_PARAM_BEER_ID
        }
      }
    }
  }
};

/**
 * The injection token to use on beer detail module
 * @type {InjectionToken<BeerDetailModuleConfig>}
 */
export let BEER_DETAIL_MODULE_CONFIG = new InjectionToken<BeerDetailModuleConfig>('beer-detail.module.config');
