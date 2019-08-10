import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {BeerListModule} from './beer/list/beer-list.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BeerDetailModule} from './beer/detail/beer-detail.module';
import {APP_CONSTANTS, APP_MODULE_CONFIG} from './app.config';

/**
 * Represents app module
 * @module AppModule
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BeerListModule,
    BeerDetailModule
  ],
  providers: [
    {provide: APP_MODULE_CONFIG, useValue: APP_CONSTANTS}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
