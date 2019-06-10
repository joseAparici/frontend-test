export interface AppModuleConfig {
  BASE_URL: any;
  PATH: any;
}

export const APP_CONSTANTS: AppModuleConfig = {
  BASE_URL: 'https://api.punkapi.com/v2',
  PATH: {
    DEFAULT: '/beers'
  }

};
