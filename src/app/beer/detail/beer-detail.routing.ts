import {Routes} from '@angular/router';
import {BeerDetailComponent} from './components/beer-detail/beer-detail.component';
import {APP_CONSTANTS} from '../../app.config';

/**
 * The route associated to beer detail component
 * @constant
 * @type {Route[]}
 */
export const BeerDetailRouting: Routes = [
  {
    path: APP_CONSTANTS.ROUTES.BEER_DETAIL,
    component: BeerDetailComponent
  }
];
