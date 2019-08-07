import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BeerDetailComponent} from './beer-detail.component';
import {
  BEER_DETAIL_MODULE_CONFIG,
  BEER_DETAIL_MODULE_CONSTANTS
} from '../../beer-detail.module.config';
import {APP_CONSTANTS, APP_MODULE_CONFIG, AppModuleConfig} from '../../../../app.config';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerDetailService} from '../../services/beer-detail.service';
import {BeerDetailServiceMock} from '../../services/beer-detail.service.mock';
import any = jasmine.any;

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;
  let appModuleConfig: AppModuleConfig;
  let beerDetailService: BeerDetailService;
  let router: Router;
  let spies: any;
  let mocks: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ BeerDetailComponent ],
      providers: [
        {provide: BeerDetailService, useClass: BeerDetailServiceMock},
        {provide: APP_MODULE_CONFIG, useValue: APP_CONSTANTS},
        {provide: BEER_DETAIL_MODULE_CONFIG, useValue: BEER_DETAIL_MODULE_CONSTANTS},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {'beerId': 1}
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    appModuleConfig = TestBed.get(APP_MODULE_CONFIG);
    beerDetailService = TestBed.get(BeerDetailService);
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

  describe('on init', () => {
    it('should call to beer service get beer method', () => {
      component.ngOnInit();
      expect(beerDetailService.getBeer).toHaveBeenCalledWith(mocks.beerId)
    });
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
      expect(spies.beerDetailService.calculateDifference).toHaveBeenCalled();
      expect(component.gravityDifference).toEqual(mocks.gravityDifference);
    });
  });


  function loadMocks() {
    mocks = {
      beerId: 1,
      gravityDifference: 2
    };
  }

  function initSpies() {
    spies = {
      router: {
        navigate: spyOn(router, 'navigate')
      },
      beerDetailService: {
        getBeer: spyOn(beerDetailService, 'getBeer').and.callThrough(),
        calculateDifference: spyOn(beerDetailService, 'calculateDifference').and.returnValue(mocks.gravityDifference)
      }
    };
  }
});
