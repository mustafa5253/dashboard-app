import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, zip as observableZip } from 'rxjs';
import { Router } from '@angular/router';
import { Inject, Injectable, Optional } from '@angular/core';
import { IServiceConfigArgs, ServiceConfig } from './service.config';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DashboardService {

  constructor(
    @Optional() @Inject(ServiceConfig)
    private config: IServiceConfigArgs,
    private _http: HttpClient
  ) {
  }

  /*
* Get all branches
*/
  public GetAllWidgets(): Observable<any> {
    debugger;
    return this._http.get('/fake-db/dashboard').pipe(map((res) => {
      debugger;
      const data: any = res;
      data.queryString = {};
      return data;
    }));
  }
}
