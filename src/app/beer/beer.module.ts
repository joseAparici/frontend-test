import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {BeerRouting} from './beer.routing';
import {BeerService} from './services/beer.service';
import {HttpClientModule} from '@angular/common/http';
import {BEER_MODULE_CONFIG, BEER_MODULE_CONSTANTS} from './beer.module.config';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BeerEffects} from './store/effects/beer.effect';
import {BeerDetailComponent} from './components/beer-detail/beer-detail.component';
import {beerReducers} from './store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeerRouting),
    StoreModule.forFeature('drink', beerReducers),
    EffectsModule.forFeature([BeerEffects])
  ],
  declarations: [
    BeerDetailComponent
  ],
  providers: [
    BeerService,
    {provide: BEER_MODULE_CONFIG, useValue: BEER_MODULE_CONSTANTS}

  ]
})
export class BeerModule { }
