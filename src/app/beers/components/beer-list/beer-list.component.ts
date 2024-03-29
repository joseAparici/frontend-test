import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {DrinksState} from '../../store';
import {Observable, Subscription} from 'rxjs';
import {getBeersPagination, getBeersSelector} from '../../store/selectors/beers.selectors';
import {fetchBeersListRequest, nextBeersPageRequest} from '../../store/actions/beers.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Pagination} from '../../store/state/beers.state-type';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy {

  public beers$: Observable<any>;
  private subscription = new Subscription();

  constructor(private store: Store<DrinksState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription.add(
      this.store.pipe(select(getBeersPagination)).subscribe((pagination: Pagination) => {
        if (pagination.hasMoreItems && pagination.pageNum * pagination.pageSize > pagination.currentItems) {
          this.store.dispatch(fetchBeersListRequest(pagination));
        }
      })
    );

    this.beers$ = this.store.pipe(select(getBeersSelector));
  }

  goToDetail(beerId: number) {
    this.router.navigate([beerId], {relativeTo: this.route});
  }

  onScroll() {
    this.store.dispatch(nextBeersPageRequest());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
