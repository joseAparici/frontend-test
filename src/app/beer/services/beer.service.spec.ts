import {TestBed} from '@angular/core/testing';
import {BeerService} from './beer.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BEER_MODULE_CONFIG, BEER_MODULE_CONSTANTS, BeerModuleConfig} from '../beer.module.config';
import {Observable} from 'rxjs';

describe('BeerService', () => {
  let beerService: BeerService;
  let beerModuleConfig: BeerModuleConfig;
  let httpMock: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BeerService,
        {provide: BEER_MODULE_CONFIG, useValue: BEER_MODULE_CONSTANTS}
      ]
    });
  });

  beforeEach(() => {
    beerService = TestBed.get(BeerService);
    beerModuleConfig = TestBed.get(BEER_MODULE_CONFIG);
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    loadMocks();
  });

  it('should be created', () => {
    expect(beerService).toBeTruthy();
  });

  describe('get beer', () => {
   it('should return and observable', () => {
      const result = beerService.getBeer(mocks.beerId);
      expect(result instanceof Observable).toBe(true);
    });

    it('should retrieve beer by doing an http request with beer id', () => {
      beerService.getBeer(mocks.beerId).subscribe();
      expect(httpMock.open[0].request.method).toBe('GET');
      expect(httpMock.open[0].request.url).toBe(beerModuleConfig.ENDPOINT.BEER.GET.URL);
    });
  });
  function loadMocks() {
    mocks = {
      beerId: 'beerId'
    };
  }

});
