import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import {of} from 'rxjs';
import {FETCH_BEER_REQUEST, fetchBeerFailed, fetchBeerResponse} from '../actions/beer.action';
import {GenericAction} from '../../../models';
import {BeerDetailService} from '../../services/beer-detail.service';


@Injectable()
export class BeerEffects {

  constructor(private actions$: Actions,
              private beerService: BeerDetailService) {
  }

  @Effect() fetchBeer = this.actions$
    .pipe(
      ofType(FETCH_BEER_REQUEST),
      switchMap((action: GenericAction) => this.beerService.getBeer(action.payload.beerId)),
      map((res) => fetchBeerResponse(res[0])),
      catchError(() => of(fetchBeerFailed()))
    );
}
