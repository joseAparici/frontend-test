import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BEER_DETAIL_MODULE_CONFIG, BeerDetailModuleConfig} from '../beer-detail.module.config';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerDetailService {

  constructor(@Inject(BEER_DETAIL_MODULE_CONFIG) private beerDetailModuleConfig: BeerDetailModuleConfig,
              private http: HttpClient) { }

  public getBeer(beerId: number): Observable<any> {
    const url = this._addBeerIdToUrl(this.beerDetailModuleConfig.ENDPOINT.BEER.GET.URL, beerId);
    return this.http.get(url).pipe(map((data: any) => data[0]));
  }

  private _addBeerIdToUrl(url: string, beerId: number) {
    return url.replace(this.beerDetailModuleConfig.ENDPOINT.BEER.GET.PATH_PARAMS.BEER_ID, beerId.toString());
  }

  calculateDifference(original_gravity, final_gravity) {
    return original_gravity - final_gravity;
  }
}
