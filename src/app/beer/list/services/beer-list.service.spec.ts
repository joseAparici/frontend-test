import {TestBed} from '@angular/core/testing';
import {BeerListService} from './beer-list.service';
import {BEER_LIST_MODULE_CONFIG, BEER_LIST_MODULE_CONSTANTS, BeerListModuleConfig} from '../beer-list.module.config';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Observable} from 'rxjs';
import {Pagination} from '../store/state/beers.state-type';

describe('BeerListService', () => {
  let beerListService: BeerListService;
  let beerListModuleConfig: BeerListModuleConfig;
  let httpMock: any;
  let mocks: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BeerListService,
        {provide: BEER_LIST_MODULE_CONFIG, useValue: BEER_LIST_MODULE_CONSTANTS}
      ]
    });
  });

  beforeEach(() => {
    beerListService = TestBed.get(BeerListService);
    beerListModuleConfig = TestBed.get(BEER_LIST_MODULE_CONFIG);
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    loadMocks();
  });

  it('should be created', () => {
    expect(beerListService).toBeTruthy();
  });

  describe('get beers', () => {
    it('should return and observable', () => {
      const result = beerListService.getBeers(mocks.beersPagination);
      expect(result instanceof Observable).toBe(true);
    });

    it('should get beers by doing an http request with beers pagination', () => {
      beerListService.getBeers(mocks.beersPagination).subscribe();
      expect(httpMock.open[0].request.method).toBe('GET');
      expect(httpMock.open[0].request.url).toBe(beerListModuleConfig.ENDPOINT.BEERS.GET.URL);
      expect(httpMock.open[0].request.params.get(beerListModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_NUMBER))
        .toBe(mocks.beersPagination.pageNum.toString());
      expect(httpMock.open[0].request.params.get(beerListModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_SIZE))
        .toBe(mocks.beersPagination.pageSize.toString());
    });
  });

  function loadMocks() {
    mocks = {
      beersPagination: <Pagination>{
        pageNum: 1,
        pageSize: BEER_LIST_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE,
        currentItems: 0,
        hasMoreItems: true
      },
      beerId: 'beerId'
    };
  }
});
