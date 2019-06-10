import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { BeerListComponent } from './beer-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { DrinksState } from '../../store';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {nextBeersPageRequest} from '../../store/actions/beers.actions';
import {of} from 'rxjs';
import {Pagination} from '../../store/state/beers.state-type';
import {BEERS_MODULE_CONSTANTS} from '../../beers.module.config';
import any = jasmine.any;


xdescribe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let store: Store<DrinksState>;
  let router: Router;
  let spies: any;
  let mocks: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        BeerListComponent
      ],
      providers: [
        Store
      ]
    });
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
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

  describe('ngOnInit', () => {
    it('should fetch data and initialize beers list', fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(spies.store.dispatch).toHaveBeenCalled();
      expect(component.beers$).toBeDefined();
    }));
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
      expect(spies.store.dispatch).toHaveBeenCalledWith(nextBeersPageRequest());
    });
  });

  function loadMocks() {
    mocks = {
      beerId: 1,
      pagination: <Pagination>{
        pageNum: 1,
        pageSize: BEERS_MODULE_CONSTANTS.ENDPOINT.BEERS.GET.DEFAULT_PAGE_SIZE,
        currentItems: 0,
        hasMoreItems: true
      }
    };
  }

  function initSpies() {
    spies = {
      store: {
        dispatch: spyOn(store, 'dispatch').and.callFake((params) => {
          return of(any);
        }),
        pipe: spyOn(store, 'pipe').and.returnValue(of(mocks.pagination))
      },
      router: {
        navigate: spyOn(router, 'navigate')
      }
    };
  }
});
