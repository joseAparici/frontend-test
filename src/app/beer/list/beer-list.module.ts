import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BeerListComponent} from './components/beer-list/beer-list.component';
import {RouterModule} from '@angular/router';
import {BeerListRouting} from './beer-list.routing';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {beersReducers} from '../../store';
import {EffectsModule} from '@ngrx/effects';
import {BeersEffects} from '../../store/effects/beers.effects';
import {BeerListService} from './services/beer-list.service';
import {BEER_LIST_MODULE_CONFIG, BEER_LIST_MODULE_CONSTANTS} from './beer-list.module.config';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeerListRouting),
    StoreModule.forFeature('drinks', beersReducers),
    EffectsModule.forFeature([BeersEffects]),
    InfiniteScrollModule
  ],
  declarations: [
    BeerListComponent
  ],
  providers: [
    BeerListService,
    {provide: BEER_LIST_MODULE_CONFIG, useValue: BEER_LIST_MODULE_CONSTANTS}
  ]
})
export class BeerListModule { }
