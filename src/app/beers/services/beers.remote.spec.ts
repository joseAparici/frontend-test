import { TestBed } from '@angular/core/testing';

import { BeersRemote } from './beers.remote';
import {BEERS_MODULE_CONFIG, BEERS_MODULE_CONSTANTS, BeersModuleConfig} from '../beers.module.config';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BeersPagination} from '../model/beers-pagination';
import {Observable} from 'rxjs';

describe('BeersRemote', () => {
  let beersRemote: BeersRemote;
  let beersModuleConfig: BeersModuleConfig;
  let httpMock: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BeersRemote,
        {provide: BEERS_MODULE_CONFIG, useValue: BEERS_MODULE_CONSTANTS}
      ]
    });
  });

  beforeEach(() => {
    beersRemote = TestBed.get(BeersRemote);
    beersModuleConfig = TestBed.get(BEERS_MODULE_CONFIG);
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    loadMocks();
  });

  it('should be created', () => {
    expect(beersRemote).toBeTruthy();
  });

  describe('retrieve beers', () => {
    it('should return and observable', () => {
      const result = beersRemote.retrieveBeers(mocks.beersPagination);
      expect(result instanceof Observable).toBe(true);
    });

    it('should retrieve beers by doing an http request with beers pagination', () => {
      beersRemote.retrieveBeers(mocks.beersPagination).subscribe();
      expect(httpMock.open[0].request.method).toBe('GET');
      expect(httpMock.open[0].request.url).toBe(beersModuleConfig.ENDPOINT.BEERS.GET.URL);
      expect(httpMock.open[0].request.params.get(beersModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_NUMBER))
        .toBe(mocks.beersPagination.num.toString());
      expect(httpMock.open[0].request.params.get(beersModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_SIZE))
        .toBe(mocks.beersPagination.size.toString());
    });
  });

  describe('retrieve beer', () => {
    it('should return and observable', () => {
      const result = beersRemote.retrieveBeer(mocks.beerId);
      expect(result instanceof Observable).toBe(true);
    });

    it('should retrieve beer by doing an http request with beer id', () => {
      beersRemote.retrieveBeer(mocks.beerId).subscribe();
      expect(httpMock.open[0].request.method).toBe('GET');
      expect(httpMock.open[0].request.url).toBe(beersModuleConfig.ENDPOINT.BEER.GET.URL);
    });
  });

  function loadMocks() {
    mocks = {
      beersPagination: new BeersPagination(1, 1),
      beerId: 'beerId'
    };
  }
});
