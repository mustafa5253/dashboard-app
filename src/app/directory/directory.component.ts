import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardEffects } from '../store/effects/dashboard.effect';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppState } from '../store/reducers/roots';
import { DirectoryState } from '../store/reducers/directory.reducer';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  public directoryData$: Observable<any> = of(null);
  public directory: DirectoryState[] = [];

  constructor(private store: Store<AppState>, private dashboardAction: DashboardEffects, private _router: Router) {
    this.directoryData$ = this.store.select(p => p.directory.directoryData);
  }

  public ngOnInit() {
    this.directoryData$.subscribe((res) => {
      this.directory = res;
    });
  }

}
