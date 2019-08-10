import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BeerDetailRouting} from './beer-detail.routing';
import {BeerDetailService} from './services/beer-detail.service';
import {HttpClientModule} from '@angular/common/http';
import {BEER_DETAIL_MODULE_CONFIG, BEER_DETAIL_MODULE_CONSTANTS} from './beer-detail.module.config';
import {BeerDetailComponent} from './components/beer-detail/beer-detail.component';

/**
 * Represent beer detail module
 * @module BeerDetailModule
 */

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeerDetailRouting)
  ],
  declarations: [
    BeerDetailComponent
  ],
  providers: [
    BeerDetailService,
    {provide: BEER_DETAIL_MODULE_CONFIG, useValue: BEER_DETAIL_MODULE_CONSTANTS}

  ]
})
export class BeerDetailModule { }
