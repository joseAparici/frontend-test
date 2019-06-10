import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerDetailComponent } from './beer-detail.component';
import {BEERS_MODULE_CONFIG, BEERS_MODULE_CONSTANTS, BeersModuleConfig} from '../../beers.module.config';
import {BeersService} from '../../services/beers.service';
import {BeersServiceMock} from '../../services/beers.service.mock';
import {Router} from '@angular/router';
import {BeersRemoteMock} from '../../services/beers.remote.mock';
import {RouterTestingModule} from '@angular/router/testing';

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;
  let beersService: BeersService;
  let beersModuleConfig: BeersModuleConfig;
  let router: Router;
  let spies: any;
  let mocks: any;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ BeerDetailComponent ],
      providers: [
        {provide: BeersService, useClass: BeersServiceMock},
        {provide: BEERS_MODULE_CONFIG, useValue: BEERS_MODULE_CONSTANTS}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    beersService = TestBed.get(BeersService);
    beersModuleConfig = TestBed.get(BEERS_MODULE_CONFIG);
    router = TestBed.get(Router);

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
    it('should call to beersService currentBeer$', () => {
      component.ngOnInit();
      expect(spies.beersService.currentBeer$).toHaveBeenCalled();
    });
  });

  describe('go back', () => {
    it('should call to router navigate', () => {
      component.goBack();
      expect(spies.router.navigate).toHaveBeenCalled();
    });
  });

  describe('calculateDifference', () => {
    it('should call to beersService calculateGravityDifference', () => {
      component.calculateDifference();
      expect(spies.beersService.calculateGravityDifference).toHaveBeenCalled();
    });

  });

  function loadMocks() {
    mocks = {
      beers: BeersRemoteMock.mockData.beers,
      beerId: 1
    };
  }

  function initSpies() {
    spies = {
      beersService: {
        currentBeer$: spyOn(beersService, 'currentBeer$').and.callThrough(),
        calculateGravityDifference: spyOn(beersService, 'calculateGravityDifference').and.callThrough()
      },
      router: {
        navigate: spyOn(router, 'navigate')
      }
    };
  }
});
