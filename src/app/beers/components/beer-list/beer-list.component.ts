import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BeersService} from '../../services/beers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy {

  beers: Array<any> = [];
  private subscription = new Subscription();

  constructor(private beersService: BeersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription.add(
      this.beersService.currentBeers$().subscribe((beers: any) => {
        this.beers = beers;
      })
    );
  }

  goToDetail(beerId: number) {
    this.router.navigate([beerId], {relativeTo: this.route});
  }

  onScroll() {
    this.beersService.getNextPage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
