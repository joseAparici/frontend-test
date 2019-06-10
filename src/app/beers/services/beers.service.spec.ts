import { TestBed } from '@angular/core/testing';
import {BeersService} from './beers.service';
import {BEERS_MODULE_CONFIG, BEERS_MODULE_CONSTANTS, BeersModuleConfig} from '../beers.module.config';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Observable} from 'rxjs';
import {Pagination} from '../store/state/beers.state-type';

describe('BeersService', () => {
  let beersService: BeersService;
  let beersModuleConfig: BeersModuleConfig;
  let httpMock: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BeersService,
        {provide: BEERS_MODULE_CONFIG, useValue: BEERS_MODULE_CONSTANTS}
      ]
    });
  });

  beforeEach(() => {
    beersService = TestBed.get(BeersService);
    beersModuleConfig = TestBed.get(BEERS_MODULE_CONFIG);
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    loadMocks();
  });

  it('should be created', () => {
    expect(beersService).toBeTruthy();
  });

  describe('get beers', () => {
    it('should return and observable', () => {
      const result = beersService.getBeers(mocks.beersPagination);
      expect(result instanceof Observable).toBe(true);
    });

    it('should get beers by doing an http request with beers pagination', () => {
      beersService.getBeers(mocks.beersPagination).subscribe();
      expect(httpMock.open[0].request.method).toBe('GET');
      expect(httpMock.open[0].request.url).toBe(beersModuleConfig.ENDPOINT.BEERS.GET.URL);
      expect(httpMock.open[0].request.params.get(beersModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_NUMBER))
        .toBe(mocks.beersPagination.pageNum.toString());
      expect(httpMock.open[0].request.params.get(beersModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_SIZE))
        .toBe(mocks.beersPagination.pageSize.toString());
    });
  });

  function loadMocks() {
    mocks = {
      beersPagination: <Pagination>{
        pageNum: 1,
        pageSize: BEERS_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE,
        currentItems: 0,
        hasMoreItems: true
      },
      beerId: 'beerId'
    };
  }
});
