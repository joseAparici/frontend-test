import {BeersService} from './beers.service';
import {TestBed} from '@angular/core/testing';
import {BeersServiceMock} from './beers.service.mock';
import {BeerResolver} from './beer-resolver';
import {ActivatedRouteSnapshot} from '@angular/router';

describe('BeerResolver', () => {
  let beerResolver: BeerResolver;
  let beersService: BeersService;
  let mocks: any;
  let spies: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BeerResolver,
        {provide: BeersService, useClass: BeersServiceMock}
      ]
    });
  });

  beforeEach(() => {
    beerResolver = TestBed.get(BeerResolver);
    beersService = TestBed.get(BeersService);
  });

  beforeEach( () => {
    loadMocks();
    initSpies();
  });

  it('should be created', () => {
    expect(beerResolver).toBeTruthy();
  });

  describe('resolve', () => {
    it('should call to load beer', () => {
      beerResolver.resolve(mocks.route, mocks.routeState);
      expect(beersService.loadBeer).toHaveBeenCalled();
    });
  });

  function loadMocks() {
    const route = new ActivatedRouteSnapshot();
    const routeState = new ActivatedRouteSnapshot();
    mocks = {
      route: route,
      routeState: routeState
    };
  }

  function initSpies() {
    spies = {
      beersService: {
        loadBeer: spyOn(beersService, 'loadBeer').and.callThrough()
      }
    };
  }
});
