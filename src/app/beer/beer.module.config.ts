import {InjectionToken} from '@angular/core';
import {APP_CONSTANTS} from '../app.config';

const PATH_PARAM_BEER_ID = 'beerId';

export interface BeerModuleConfig {
  ENDPOINT: any;
}

export const BEER_MODULE_CONSTANTS: BeerModuleConfig = {
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

export let BEER_MODULE_CONFIG = new InjectionToken<BeerModuleConfig>('beer.module.config');
