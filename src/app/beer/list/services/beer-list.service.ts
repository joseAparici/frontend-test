import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BEER_LIST_MODULE_CONFIG, BeerListModuleConfig} from '../beer-list.module.config';
import {Pagination} from '../../../store/state/beers.state-type';

@Injectable({
  providedIn: 'root'
})
export class BeerListService {

  constructor(@Inject(BEER_LIST_MODULE_CONFIG) private beerListModuleConfig: BeerListModuleConfig,
              private http: HttpClient) { }

  public getBeers(pagination: Pagination): Observable<any> {
    const httpParams = this._createHttpParams(pagination.pageNum, pagination.pageSize);
    return this.http.get(this.beerListModuleConfig.ENDPOINT.BEERS.GET.URL, {params: httpParams});
  }

  private _createHttpParams(number: number, size: number) {
    return new HttpParams()
      .set(this.beerListModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_NUMBER, number.toString())
      .set(this.beerListModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_SIZE, size.toString());
  }
}
