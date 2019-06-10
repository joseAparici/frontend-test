import {Observable, of} from 'rxjs';

export class BeersRemoteMock {
  static mockData = {
    beers: [{id: 1}, {id: 2}, {id: 3}]
  };

  retrieveBeers(): Observable<any> {
    return of(BeersRemoteMock.mockData.beers);
  }

  retrieveBeer(): Observable<any> {
    return of(BeersRemoteMock.mockData.beers[0]);
  }
}
