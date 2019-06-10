import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import { BeersService } from '../../services/beers.service';
import {
  FETCH_BEERS_REQUEST,
  fetchBeersListFailed,
  fetchBeersListResponse
} from '../actions/beers.actions';
import { of } from 'rxjs';
import {GenericAction} from '../../../models';


@Injectable()
export class BeersEffects {

  constructor(private actions$: Actions,
              private beersService: BeersService) {
  }

  @Effect() fetchBeers = this.actions$
    .pipe(
      ofType(FETCH_BEERS_REQUEST),
      switchMap((action: GenericAction) => this.beersService.getBeers(action.payload.pagination)),
      map((res) => fetchBeersListResponse(res)),
      catchError(() => of(fetchBeersListFailed()))
    );
}
