import {Component, Inject, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {fetchBeerRequest} from '../../store/actions/beer.action';
import {Observable} from 'rxjs';
import {getBeerSelector} from '../../store/selector/beer.selector';
import {ActivatedRoute, Router} from '@angular/router';
import {DrinkState} from '../../store';
import {BEER_DETAIL_MODULE_CONFIG, BeerDetailModuleConfig} from '../../beer-detail.module.config';
import {APP_MODULE_CONFIG, AppModuleConfig} from '../../../../app.config';
import {BeerDetailService} from '../../services/beer-detail.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  public beer$: Observable<any>;
  public gravityDifference;

  constructor(@Inject(APP_MODULE_CONFIG) private appModuleConfig: AppModuleConfig,
              @Inject(BEER_DETAIL_MODULE_CONFIG) private beerModuleConfig: BeerDetailModuleConfig,
              private beerService: BeerDetailService,
              private store: Store<DrinkState>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const beerId = this.route.snapshot.params[this.beerModuleConfig.ENDPOINT.BEER.GET.PATH_PARAMS.BEER_ID];
    this.store.dispatch(fetchBeerRequest(beerId));
    this.beer$ = this.store.pipe(select(getBeerSelector));
  }

  goBack() {
    this.router.navigate([this.appModuleConfig.ROUTES.BEERS]);
  }

  calculateGravityDifference(original_gravity, final_gravity) {
    this.gravityDifference = this.beerService.calculateDifference(original_gravity, final_gravity);
  }
}

