import {Component, Inject, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {fetchBeerRequest} from '../../store/actions/beer.action';
import {Observable} from 'rxjs';
import {getBeerSelector} from '../../store/selector/beer.selector';
import {ActivatedRoute, Router} from '@angular/router';
import {DrinkState} from '../../store';
import {BEER_MODULE_CONFIG, BeerModuleConfig} from '../../beer.module.config';
import {APP_MODULE_CONFIG, AppModuleConfig} from '../../../app.config';
import {BeerService} from '../../services/beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  public beer$: Observable<any>;
  public gravityDifference;

  constructor(@Inject(APP_MODULE_CONFIG) private appModuleConfig: AppModuleConfig,
              @Inject(BEER_MODULE_CONFIG) private beerModuleConfig: BeerModuleConfig,
              private beerService: BeerService,
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

