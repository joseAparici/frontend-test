import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BEERS_MODULE_CONFIG, BeersModuleConfig} from '../beers.module.config';
import {BeersState} from './beers-state';
import {map} from 'rxjs/operators';
import {BeersPagination} from '../model/beers-pagination';
import {BeersRemote} from './beers.remote';


@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(@Inject(BEERS_MODULE_CONFIG) private beersModuleConfig: BeersModuleConfig,
              private beersRemote: BeersRemote,
              private beersState: BeersState) {
    this.beersState.currentPagination = new BeersPagination(this.beersModuleConfig.ENDPOINT.BEERS.GET.DEFAULT_PAGE_NUMBER,
      this.beersModuleConfig.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE);
  }

  loadBeers(): Observable<any> {
    if (this.beersState.beers.length < 1) {
      return this.beersRemote.retrieveBeers(this.beersState.currentPagination).pipe(
        map((beers: any) => this.beersState.beers = beers)
      );
    } else {
      return of(true);
    }
  }

  loadBeer(beerId: number): Observable<any> {
    const beerFound = this.beersState.beers.find((beer) => beer.id === beerId);
    if (beerFound) {
      this.beersState.beer = beerFound;
      return of(true);
    } else {
      return this.beersRemote.retrieveBeer(beerId).pipe(
        map((b: any) => this.beersState.beer = b[0])
      );
    }
  }

  currentBeers$(): Observable<Array<any>> {
    return this.beersState.beers$.asObservable();
  }

  currentBeer$(): Observable<any> {
    return this.beersState.beer$.asObservable();
  }

  getNextPage() {
    this.beersState.currentPagination.size = this.beersModuleConfig.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE * 2;
    this.beersRemote.retrieveBeers(this.beersState.currentPagination).subscribe((beers: any) => {
      this.beersState.currentPagination.num = this.beersState.currentPagination.num + 1;
      this.beersState.beers = beers;
    });
  }

  calculateGravityDifference(original_gravity, final_gravity) {
    return original_gravity - final_gravity;
  }
}
