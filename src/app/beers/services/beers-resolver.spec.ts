import {BeersService} from './beers.service';
import {TestBed} from '@angular/core/testing';
import {BeersServiceMock} from './beers.service.mock';
import {ActivatedRouteSnapshot} from '@angular/router';
import {BeersResolver} from './beers-resolver';

describe('BeersResolver', () => {
  let beersResolver: BeersResolver;
  let beersService: BeersService;
  let mocks: any;
  let spies: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BeersResolver,
        {provide: BeersService, useClass: BeersServiceMock}
      ]
    });
  });

  beforeEach(() => {
    beersResolver = TestBed.get(BeersResolver);
    beersService = TestBed.get(BeersService);
  });

  beforeEach( () => {
    loadMocks();
    initSpies();
  });

  it('should be created', () => {
    expect(beersResolver).toBeTruthy();
  });

  describe('resolve', () => {
    it('should call to load beer', () => {
      beersResolver.resolve(mocks.route, mocks.routeState);
      expect(beersService.loadBeers).toHaveBeenCalled();
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
        loadBeers: spyOn(beersService, 'loadBeers').and.callThrough()
      }
    };
  }
});
