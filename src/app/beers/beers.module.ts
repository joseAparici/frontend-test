import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BeerListComponent} from './components/beer-list/beer-list.component';
import {RouterModule} from '@angular/router';
import {BeersRouting} from './beers.routing';
import {HttpClientModule} from '@angular/common/http';
import {BeersService} from './services/beers.service';
import {BEERS_MODULE_CONFIG, BEERS_MODULE_CONSTANTS} from './beers.module.config';
import {BeersState} from './services/beers-state';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';
import {BeersResolver} from './services/beers-resolver';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {BeerResolver} from './services/beer-resolver';
import {BeersRemote} from './services/beers.remote';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeersRouting),
    InfiniteScrollModule
  ],
  declarations: [
    BeerListComponent,
    BeerDetailComponent
  ],
  providers: [
    BeersService,
    BeersState,
    BeersRemote,
    BeersResolver,
    BeerResolver,
    {provide: BEERS_MODULE_CONFIG, useValue: BEERS_MODULE_CONSTANTS}
  ]
})
export class BeersModule {
}
