import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {BeersService} from '../../services/beers.service';
import {Router} from '@angular/router';
import {BEERS_MODULE_CONFIG, BeersModuleConfig} from '../../beers.module.config';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit, OnDestroy {

  beer: any;
  gravityDifference;
  private subscription = new Subscription();

  constructor(@Inject(BEERS_MODULE_CONFIG) private beersModuleConfig: BeersModuleConfig,
              private beersService: BeersService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription.add(
      this.beersService.currentBeer$().subscribe((beer: any) => {
        this.beer = beer;
      })
    );
  }

  goBack() {
    this.router.navigate([this.beersModuleConfig.ROUTES.BEERS]);
  }

  calculateDifference() {
    this.gravityDifference = this.beersService.calculateGravityDifference(this.beer.target_og, this.beer.target_fg);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
