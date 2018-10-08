import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, zip as observableZip } from 'rxjs';

import { map, switchMap } from 'rxjs/operators';
import { DashboardService } from '../../services/dashboard.service';

// export const HOME = {
//   GET_USER: 'GET_USER',
//   GET_USER_RESPONSE: 'GET_USER_RESPONSE',

//   GET_DASHBOARD_WIDGETS: 'GET_DASHBOARD_WIDGETS',
//   GET_DASHBOARD_WIDGETS_RESPONSE: 'GET_DASHBOARD_WIDGETS_RESPONSE'
// };

@Injectable()

export class DashboardEffects {

  public static GET_USER = 'GET_USER';
  public static GET_USER_RESPONSE = 'GET_USER_RESPONSE';

  public static GET_DASHBOARD_WIDGETS = 'GET_DASHBOARD_WIDGETS';
  public static GET_DASHBOARD_WIDGETS_RESPONSE = 'GET_DASHBOARD_WIDGETS_RESPONSE';

  @Effect()
  public GetDashboardData$: Observable<any> = this.actions$
    .ofType(DashboardEffects.GET_DASHBOARD_WIDGETS).pipe(
      switchMap(() => this._dashboardService.GetAllWidgets()),
      map(resp => this.getDashboardDataResponse(resp))
    );

  constructor(private actions$: Actions, private _dashboardService: DashboardService) { }


  /**
   * getUser
   */
  public getUser() {
    return {
      type: DashboardEffects.GET_USER,
    };
  }

  /**
   * getUserResponse
   */
  public getUserResponse(user) {
    return {
      type: DashboardEffects.GET_USER_RESPONSE,
      payload: user
    };
  }

  /**
   * getDashboardData
   */
  public getDashboardData() {
    return {
      type: DashboardEffects.GET_DASHBOARD_WIDGETS,
    };
  }

  /**
   * getDashboardDataResponse
   */
  public getDashboardDataResponse(res) {
    return {
      type: DashboardEffects.GET_DASHBOARD_WIDGETS_RESPONSE,
      payload: res
    };
  }
}
