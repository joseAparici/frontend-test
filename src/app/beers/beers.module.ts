import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { RouterModule } from '@angular/router';
import { BeersRouting } from './beers.routing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { beersReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { BeersEffects } from './store/effects/beers.effects';
import { BeersService } from './services/beers.service';
import {BEERS_MODULE_CONFIG, BEERS_MODULE_CONSTANTS} from './beers.module.config';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeersRouting),
    StoreModule.forFeature('drinks', beersReducers),
    EffectsModule.forFeature([BeersEffects]),
    InfiniteScrollModule
  ],
  declarations: [
    BeerListComponent
  ],
  providers: [
    BeersService,
    {provide: BEERS_MODULE_CONFIG, useValue: BEERS_MODULE_CONSTANTS}
  ]
})
export class BeersModule { }
