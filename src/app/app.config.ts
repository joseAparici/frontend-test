import {InjectionToken} from '@angular/core';

export interface AppModuleConfig {
  PATH: any;
  ROUTES: any;
  BASE_ENDPOINT_URL: any;
}

export const APP_CONSTANTS: AppModuleConfig = {
  PATH: {
    DEFAULT: '/beers'
  },
  ROUTES: {
    EMPTY: '',
    BEERS: 'beers',
    BEER_DETAIL: 'beers/:beerId'
  },
  BASE_ENDPOINT_URL: 'https://api.punkapi.com/v2'
};

export let APP_MODULE_CONFIG = new InjectionToken<AppModuleConfig>('app.module.config');

