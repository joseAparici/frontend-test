import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BEER_DETAIL_MODULE_CONFIG, BeerDetailModuleConfig} from '../beer-detail.module.config';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerDetailService {

  /**
   * Represents a service with methods related to beer detail
   * @class
   * @constructor
   * @property {BeerDetailModuleConfig} beerDetailModuleConfig to use all the constants defined in the module
   * @property {HttpClient} http to interact with the api
   */
  constructor(@Inject(BEER_DETAIL_MODULE_CONFIG) private beerDetailModuleConfig: BeerDetailModuleConfig,
              private http: HttpClient) { }

  /**
   * Makes an http get call that finds a beer by id and returns it as an observable
   * @param {number} beerId the beerId use to call the api
   * @return observable {any} the observable that represents the beer returned by the api
   */
  public getBeer(beerId: number): Observable<any> {
    const url = this._addBeerIdToUrl(this.beerDetailModuleConfig.ENDPOINT.BEER.GET.URL, beerId);
    return this.http.get(url).pipe(map((data: any) => data[0]));
  }

  /**
   * Replaces beer id param name with beer id value in the url. This url it will be use to find a beer by Id on the api.
   * @param {string} url, the url with the beer id param name
   * @param {number} beerId, the beer id value
   * @return {string} the final url with the beer id param name replaced with beer id value
   */
  private _addBeerIdToUrl(url: string, beerId: number): string {
    return url.replace(this.beerDetailModuleConfig.ENDPOINT.BEER.GET.PATH_PARAMS.BEER_ID, beerId.toString());
  }

  /**
   * Calculates the difference between original and final gravity
   * @param {number} original_gravity
   * @param {number} final_gravity
   * @return {number} the difference between the two params
   */
  calculateDifference(original_gravity: number, final_gravity: number): number {
    return original_gravity - final_gravity;
  }
}
