import {InjectionToken} from '@angular/core';
import {APP_CONSTANTS} from '../../app.config';

const PATH_PARAM_BEER_ID = 'beerId';

export interface BeerDetailModuleConfig {
  ENDPOINT: any;
}

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

export let BEER_DETAIL_MODULE_CONFIG = new InjectionToken<BeerDetailModuleConfig>('beer-detail.module.config');
