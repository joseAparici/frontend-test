import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BEERS_MODULE_CONFIG, BeersModuleConfig} from '../beers.module.config';
import {Pagination} from '../store/state/beers.state-type';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(@Inject(BEERS_MODULE_CONFIG) private beersModuleConfig: BeersModuleConfig,
              private http: HttpClient) { }

  public getBeers(pagination: Pagination): Observable<any> {
    const httpParams = this._createHttpParams(pagination.pageNum, pagination.pageSize);
    return this.http.get(this.beersModuleConfig.ENDPOINT.BEERS.GET.URL, {params: httpParams});
  }

  private _createHttpParams(number: number, size: number) {
    return new HttpParams()
      .set(this.beersModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_NUMBER, number.toString())
      .set(this.beersModuleConfig.ENDPOINT.BEERS.GET.QUERY_PARAMS.PAGE_SIZE, size.toString());
  }
}
