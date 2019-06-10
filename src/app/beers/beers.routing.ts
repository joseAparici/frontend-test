import { Routes } from '@angular/router';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import {BeerDetailComponent} from './components/beer-detail/beer-detail.component';
import {BEERS_MODULE_CONSTANTS} from './beers.module.config';
import {BeersResolver} from './services/beers-resolver';
import {BeerResolver} from './services/beer-resolver';

export const BeersRouting: Routes = [
  {
    path: BEERS_MODULE_CONSTANTS.ROUTES.BEERS,
    resolve: {beers: BeersResolver},
    component: BeerListComponent
  },
  {
    path: BEERS_MODULE_CONSTANTS.ROUTES.BEER_DETAIL,
    resolve: {beer: BeerResolver},
    component: BeerDetailComponent
  }
];
