import {Routes} from '@angular/router';
import {BeerDetailComponent} from './components/beer-detail/beer-detail.component';
import {APP_CONSTANTS} from '../../app.config';

export const BeerDetailRouting: Routes = [
  {
    path: APP_CONSTANTS.ROUTES.BEER_DETAIL,
    component: BeerDetailComponent
  }
];
