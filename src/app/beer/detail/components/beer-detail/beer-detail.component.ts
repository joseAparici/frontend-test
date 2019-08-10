import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
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

  /**
   * Represents a beer detail component
   * @class
   * @constructor
   * @property {AppModuleConfig} appModuleConfig, uses the constants defined there
   * @property {BeerDetailModuleConfig} beerDetailModuleConfig, uses the constants defined there
   * @property {BeerDetailService} beerDetailService
   * @property {ActivatedRoute} route
   * @property {Router} router
   */
  constructor(@Inject(APP_MODULE_CONFIG) private appModuleConfig: AppModuleConfig,
              @Inject(BEER_DETAIL_MODULE_CONFIG) private beerDetailModuleConfig: BeerDetailModuleConfig,
              private beerDetailService: BeerDetailService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  /**
   * Extract beerId from route and call to the service to retrieve the beer as observable
   */
  ngOnInit() {
    const beerId = this.route.snapshot.params[this.beerDetailModuleConfig.ENDPOINT.BEER.GET.PATH_PARAMS.BEER_ID];
    this.beer$ = this.beerDetailService.getBeer(beerId);
  }

  /**
   * Navigates back to beer list
   */
  goBack() {
    this.router.navigate([this.appModuleConfig.ROUTES.BEERS]);
  }

  /**
   * Call to the beer detail service in order to calculate the difference between original and final gravity.
   * The response from the service is set on gravityDifference variable and it will be displayed on the template
   * @param {number} original_gravity
   * @param {number} final_gravity
   */
  calculateGravityDifference(original_gravity: number, final_gravity: number) {
    this.gravityDifference = this.beerDetailService.calculateDifference(original_gravity, final_gravity);
  }
}
