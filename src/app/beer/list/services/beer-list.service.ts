import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BEER_LIST_MODULE_CONFIG, BeerListModuleConfig} from '../beer-list.module.config';
import {Pagination} from '../../../store/state/beers.state-type';

@Injectable({
  providedIn: 'root'
})
export class BeerListService {

  /**
   * Represents a service with methods related to beer list
   * @class
   * @constructor
   * @property {BeerListModuleConfig} beerListModuleConfig, to use all the constants defined in the module
   * @property {HttpClient} http to interact with the api
   */
  constructor(@Inject(BEER_LIST_MODULE_CONFIG) private beerListModuleConfig: BeerListModuleConfig,
              private http: HttpClient) { }

  /**
   * Makes an http call that retrieves a list of beers based on the page num and page size
   * @param {Pagination} pagination, object the has the page num and page size, it is used to build to ask for a beers page on the api
   * @return observable {any} the observable that represents the beer list returned by the api
   */
  public getBeers(pagination: Pagination): Observable<any> {
    const httpParams = this._createHttpParams(pagination.pageNum, pagination.pageSize);
    return this.http.get(this.beerListModuleConfig.ENDPOINT.BEERS.GET.URL, {params: httpParams});
  }

  /**
   * Creates an http params object with the page number and page size in order to send it to the api
   * @param {number}number, the  number that will be get from the api
   * @param {number}size, the number of elements that will be get from the api
   * @return httpParams object with the page number and page size
   */
  private _createHttpParams(number: number, size: number) {
    return new HttpParams()
      .set(this.beerListModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_NUMBER, number.toString())
      .set(this.beerListModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_SIZE, size.toString());
  }
}
