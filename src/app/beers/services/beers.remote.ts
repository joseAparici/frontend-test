import {Inject, Injectable} from '@angular/core';
import {BEERS_MODULE_CONFIG, BeersModuleConfig} from '../beers.module.config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeersPagination} from '../model/beers-pagination';

@Injectable({
  providedIn: 'root'
})
export class BeersRemote {

  constructor(@Inject(BEERS_MODULE_CONFIG) private beersModuleConfig: BeersModuleConfig,
              private http: HttpClient) {
  }

  retrieveBeers(beersPagination: BeersPagination): Observable<any> {
    const httpParams = this._createHttpParams(beersPagination.num, beersPagination.size);
    return this.http.get(this.beersModuleConfig.ENDPOINT.BEERS.GET.URL, {params: httpParams});
  }

  private _createHttpParams(page_number: number, page_size: number) {
    return new HttpParams()
      .set(this.beersModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_NUMBER, page_number.toString())
      .set(this.beersModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_SIZE, page_size.toString());
  }

  retrieveBeer(beerId: number) {
    const url = this._addBeerIdToUrl(this.beersModuleConfig.ENDPOINT.BEER.GET.URL, beerId);
    return this.http.get(url);
  }

  private _addBeerIdToUrl(url: string, beerId: number) {
    return url.replace(this.beersModuleConfig.ENDPOINT.BEER.GET.PATH_PARAMS.BEER_ID, beerId.toString());
  }


}
