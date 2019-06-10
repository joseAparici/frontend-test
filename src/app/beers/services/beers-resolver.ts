import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BeersService} from './beers.service';

@Injectable({
  providedIn: 'root'
})
export class BeersResolver implements Resolve<any> {

  constructor(private beersService: BeersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.beersService.loadBeers();
  }
}
