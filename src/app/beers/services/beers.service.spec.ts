import { TestBed } from '@angular/core/testing';
import { BeersService } from './beers.service';
import {BeersRemote} from './beers.remote';
import {BeersState} from './beers-state';
import {BEERS_MODULE_CONFIG, BEERS_MODULE_CONSTANTS, BeersModuleConfig} from '../beers.module.config';
import {BeersRemoteMock} from './beers.remote.mock';
import {Observable} from 'rxjs';
import {BeersPagination} from '../model/beers-pagination';

describe('BeersService', () => {
  let beersService: BeersService;
  let beersRemote: BeersRemote;
  let beersState: BeersState;
  let beersModuleConfig: BeersModuleConfig;
  let spies: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BeersService,
        {provide: BeersRemote, useClass: BeersRemoteMock},
        BeersState,
        {provide: BEERS_MODULE_CONFIG, useValue: BEERS_MODULE_CONSTANTS}
      ]
    });
  });

  beforeEach(() => {
    beersService = TestBed.get(BeersService);
    beersRemote = TestBed.get(BeersRemote);
    beersState = TestBed.get(BeersState);
    beersModuleConfig = TestBed.get(BEERS_MODULE_CONFIG);
  });

  beforeEach(() => {
    loadMocks();
    initSpies();
  });

  it('should be created', () => {
    expect(beersService).toBeTruthy();
  });

  describe('load beers', () => {
    it('should call to remote if state is empty', () => {
      beersService.loadBeers();
      expect(beersRemote.retrieveBeers).toHaveBeenCalled();
    });

    it('should not call to remote if state is not empty', () => {
      beersState.beers = mocks.beers;
      beersService.loadBeers();
      expect(beersRemote.retrieveBeers).not.toHaveBeenCalled();
    });
  });

  describe('load beer', () => {
    it('should call to remote if beer does not exists on state', () => {
      beersState.beers = [];
      beersService.loadBeer(mocks.beerId);
      expect(beersRemote.retrieveBeer).toHaveBeenCalled();
    });

    it('should not call to remote if beer exists on state', () => {
      beersState.beers = mocks.beers;
      beersService.loadBeer(mocks.beerId);
      expect(beersRemote.retrieveBeer).not.toHaveBeenCalled();
    });
  });

  describe('current beers$', () => {
    it('should return and observable', () => {
      const result = beersService.currentBeers$();
      expect(result instanceof Observable).toBe(true);
    });
  });

  describe('current beer$', () => {
    it('should return and observable', () => {
      const result = beersService.currentBeer$();
      expect(result instanceof Observable).toBe(true);
    });
  });

  describe('get next page', () => {
    it('should call to remote', () => {
      beersState.currentPagination = mocks.beersPagination;
      beersService.getNextPage();
      expect(spies.beersRemote.retrieveBeers).toHaveBeenCalledWith(mocks.beersPagination);
    });
  });

  describe('calculateGravityDifference', () => {
    it('should return the difference between original and final gravity', () => {
      const result = beersService.calculateGravityDifference(mocks.original_gravity, mocks.final_gravity);
      expect(result).toBe(mocks.original_gravity - mocks.final_gravity);
    });
  });

  function loadMocks() {
    mocks = {
      beers: BeersRemoteMock.mockData.beers,
      beerId: 1,
      beersPagination: new BeersPagination(1, beersModuleConfig.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE * 2),
      original_gravity: 10,
      final_gravity: 1
    };
  }

  function initSpies() {
    spies = {
      beersRemote: {
        retrieveBeers: spyOn(beersRemote, 'retrieveBeers').and.callThrough(),
        retrieveBeer: spyOn(beersRemote, 'retrieveBeer').and.callThrough(),
      }

    };
  }
});
