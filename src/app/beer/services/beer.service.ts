import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BEER_MODULE_CONFIG, BeerModuleConfig} from '../beer.module.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(@Inject(BEER_MODULE_CONFIG) private beerModuleConfig: BeerModuleConfig,
              private http: HttpClient) { }

  public getBeer(beerId): Observable<any> {
    const url = this._addBeerIdToUrl(this.beerModuleConfig.ENDPOINT.BEER.GET.URL, beerId);
    return this.http.get(url);
  }

  private _addBeerIdToUrl(url: string, beerId: number) {
    return url.replace(this.beerModuleConfig.ENDPOINT.BEER.GET.PATH_PARAMS.BEER_ID, beerId.toString());
  }
}
