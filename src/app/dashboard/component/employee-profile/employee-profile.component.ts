import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from '../../../store/reducers';
import { Store } from '@ngrx/store';
import { DashboardEffects } from '../../../store/effects/dashboard.effect';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  public dashboardData$: Observable<any> = of(null);
  public userProfile: object = {};

  constructor(private store: Store<AppState>, private dashboardAction: DashboardEffects, private _router: Router) {
    this.dashboardData$ = this.store.select(p => p.dashboard.dashboardData);
  }

  public ngOnInit() {
    this.dashboardData$.subscribe((res) => {
      this.userProfile = res.widget1;
    });
  }
}
