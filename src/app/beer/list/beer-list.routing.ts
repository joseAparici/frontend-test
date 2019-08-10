import {Routes} from '@angular/router';
import {BeerListComponent} from './components/beer-list/beer-list.component';
import {APP_CONSTANTS} from '../../app.config';

/**
 * The route associated to beer list component
 * @constant
 * @type {Route[]}
 */

export const BeerListRouting: Routes = [
  {
    path: APP_CONSTANTS.ROUTES.BEERS,
    component: BeerListComponent
  }
];
