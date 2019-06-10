import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { BeersModule } from './beers/beers.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {BeerModule} from './beer/beer.module';
import {APP_CONSTANTS, APP_MODULE_CONFIG} from './app.config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BeersModule,
    BeerModule
  ],
  providers: [
    {provide: APP_MODULE_CONFIG, useValue: APP_CONSTANTS}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
