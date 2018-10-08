import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardEffects } from '../../../store/effects/dashboard.effect';
import { AppState } from '../../../store/reducers';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css']
})
export class UpcomingEventComponent implements OnInit {

  public dashboardData$: Observable<any> = of(null);
  public upcomingEvents: object = {};

  constructor(private store: Store<AppState>, private dashboardAction: DashboardEffects, private _router: Router) {
    this.dashboardData$ = this.store.select(p => p.dashboard.dashboardData);
  }

  public ngOnInit() {
    this.dashboardData$.subscribe((res) => {
      this.upcomingEvents = res.widget4;
    });
  }

}
