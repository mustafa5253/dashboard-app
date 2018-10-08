import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardEffects } from '../store/effects/dashboard.effect';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppState } from '../store/reducers/roots';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardData$: Observable<any> = of(null);

  constructor(private store: Store<AppState>, private dashboardAction: DashboardEffects, private _router: Router) {
    this.dashboardData$ = this.store.select(p => p.dashboard.dashboardData);
  }

  public ngOnInit() {
    this.dashboardData$.subscribe((res) => {
      console.log(res);
    });
    // this.store.dispatch(this.dashboardAction.getDashboardData());
  }

}
