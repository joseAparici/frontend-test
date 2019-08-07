import {TestBed} from '@angular/core/testing';
import {BeerDetailService} from './beer-detail.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BEER_DETAIL_MODULE_CONFIG, BEER_DETAIL_MODULE_CONSTANTS, BeerDetailModuleConfig} from '../beer-detail.module.config';
import {Observable} from 'rxjs';

describe('BeerDetailService', () => {
  let beerDetailService: BeerDetailService;
  let beerDetailModuleConfig: BeerDetailModuleConfig;
  let httpMock: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BeerDetailService,
        {provide: BEER_DETAIL_MODULE_CONFIG, useValue: BEER_DETAIL_MODULE_CONSTANTS}
      ]
    });
  });

  beforeEach(() => {
    beerDetailService = TestBed.get(BeerDetailService);
    beerDetailModuleConfig = TestBed.get(BEER_DETAIL_MODULE_CONFIG);
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    loadMocks();
  });

  it('should be created', () => {
    expect(beerDetailService).toBeTruthy();
  });

  describe('get beer', () => {
   it('should return and observable', () => {
      const result = beerDetailService.getBeer(mocks.beerId);
      expect(result instanceof Observable).toBe(true);
    });

    it('should retrieve beer by doing an http request with beer id', () => {
      beerDetailService.getBeer(mocks.beerId).subscribe();
      expect(httpMock.open[0].request.method).toBe('GET');
      expect(httpMock.open[0].request.url).toBe(beerDetailModuleConfig.ENDPOINT.BEER.GET.URL);
    });
  });

  describe('calculateDifference', () => {
    it('should return the difference between original and final gravity', () => {
      const result = beerDetailService.calculateDifference(mocks.original_gravity, mocks.final_gravity);
      expect(result).toBe(mocks.original_gravity - mocks.final_gravity);
    });
  });

  function loadMocks() {
    mocks = {
      beerId: 'beerId',
      original_gravity: 10,
      final_gravity: 1
    };
  }

});
