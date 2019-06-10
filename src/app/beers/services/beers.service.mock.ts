import {Observable, of} from 'rxjs';
import {BeersRemoteMock} from './beers.remote.mock';

export class BeersServiceMock {
  loadBeers(): Observable<any> {
    return of(BeersRemoteMock.mockData.beers);
  }

  loadBeer(): Observable<any> {
    return of(BeersRemoteMock.mockData.beers[0]);
  }

  currentBeers$(): Observable<any> {
    return of(BeersRemoteMock.mockData.beers);
  }

  currentBeer$(): Observable<any> {
    return of(BeersRemoteMock.mockData.beers[0]);
  }

  getNextPage() {}

  calculateGravityDifference() {}
}
