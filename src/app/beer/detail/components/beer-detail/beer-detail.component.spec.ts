import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BeerDetailComponent} from './beer-detail.component';
import {BEER_DETAIL_MODULE_CONFIG, BEER_DETAIL_MODULE_CONSTANTS} from '../../beer-detail.module.config';
import {APP_CONSTANTS, APP_MODULE_CONFIG, AppModuleConfig} from '../../../../app.config';
import {RouterTestingModule} from '@angular/router/testing';
import {Store, StoreModule} from '@ngrx/store';
import {Router} from '@angular/router';
import {DrinkState} from '../../store';
import {Pagination} from '../../../list/store/state/beers.state-type';
import {BEER_LIST_MODULE_CONSTANTS} from '../../../list/beer-list.module.config';
import {of} from 'rxjs';
import {BeerDetailService} from '../../services/beer-detail.service';
import {BeerDetailServiceMock} from '../../services/beer-detail.service.mock';
import any = jasmine.any;

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;
  let appModuleConfig: AppModuleConfig;
  let beerService: BeerDetailService;
  let store: Store<DrinkState>;
  let router: Router;
  let spies: any;
  let mocks: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [ BeerDetailComponent ],
      providers: [
        Store,
        {provide: BeerDetailService, useClass: BeerDetailServiceMock},
        {provide: APP_MODULE_CONFIG, useValue: APP_CONSTANTS},
        {provide: BEER_DETAIL_MODULE_CONFIG, useValue: BEER_DETAIL_MODULE_CONSTANTS}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    router = TestBed.get(Router);
    appModuleConfig = TestBed.get(APP_MODULE_CONFIG);
    beerService = TestBed.get(BeerDetailService);
  });

  beforeEach(() => {
    loadMocks();
    initSpies();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('go back', () => {
    it('should navigate', () => {
      component.goBack();
      expect(spies.router.navigate).toHaveBeenCalledWith([appModuleConfig.ROUTES.BEERS]);
    });
  });

  describe('calculateGravityDifference', () => {
    it('should call to calculateDifference method service', () => {
      component.calculateGravityDifference(any, any);
      expect(spies.beerService.calculateDifference).toHaveBeenCalled();
      expect(component.gravityDifference).toEqual(mocks.gravityDifference);
    });
  });


  function loadMocks() {
    mocks = {
      beerId: 1,
      pagination: <Pagination>{
        pageNum: 1,
        pageSize: BEER_LIST_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE,
        currentItems: 0,
        hasMoreItems: true
      },
      gravityDifference: 2
    };
  }

  function initSpies() {
    spies = {
      store: {
        pipe: spyOn(store, 'pipe').and.callFake(() => of([])),
        dispatch: spyOn(store, 'dispatch').and.callThrough()
      },
      router: {
        navigate: spyOn(router, 'navigate')
      },
      beerService: {
        calculateDifference: spyOn(beerService, 'calculateDifference').and.returnValue(mocks.gravityDifference)
      }
    };
  }
});
