import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardEffects } from '../store/effects/dashboard.effect';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<any>, private dashboardAction: DashboardEffects, private _router: Router) { }

  ngOnInit() {
    debugger;
    this.store.dispatch(this.dashboardAction.getDashboardData());
  }

}
