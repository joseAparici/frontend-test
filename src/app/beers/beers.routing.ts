import {Routes} from '@angular/router';
import {BeerListComponent} from './components/beer-list/beer-list.component';
import {APP_CONSTANTS} from '../app.config';


export const BeersRouting: Routes = [
  {
    path: APP_CONSTANTS.ROUTES.BEERS,
    component: BeerListComponent
  }
];
