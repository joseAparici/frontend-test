import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { BeerListComponent } from './beer-list.component';
import {BeersService} from '../../services/beers.service';
import {BeersServiceMock} from '../../services/beers.service.mock';
import {BeersRemoteMock} from '../../services/beers.remote.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let beersService: BeersService;
  let router: Router;
  let spies: any;
  let mocks: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BeerListComponent
      ],
      providers: [
        {provide: BeersService, useClass: BeersServiceMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    beersService = TestBed.get(BeersService);
    router = TestBed.get(Router);
  });

  beforeEach(() => {
    loadMocks();
    initSpies();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {
    it('should call to currentBeers$', () => {
      component.ngOnInit();
      expect(spies.beersService.currentBeers$).toHaveBeenCalled();
    });
  });

  describe('go to detail', () => {
    it('should call to router navigate', () => {
      component.goToDetail(mocks.beerId);
      expect(spies.router.navigate).toHaveBeenCalled();
    });
  });

  describe('on scroll', () => {
    it('should call to beers service getNextPage', () => {
      component.onScroll();
      expect(spies.beersService.getNextPage).toHaveBeenCalled();
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
        currentBeers$: spyOn(beersService, 'currentBeers$').and.callThrough(),
        getNextPage: spyOn(beersService, 'getNextPage').and.callThrough()
      },
      router: {
        navigate: spyOn(router, 'navigate')
      }
    };
  }
});
