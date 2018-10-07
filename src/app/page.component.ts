import { ActivatedRoute, Router } from '@angular/router';
// import { AppState } from './store/roots';
import { Store } from '@ngrx/store';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-page',
  template: `
    <div id="main">
      <app-navbar></app-navbar>
      <div class="app-body">
        <app-sidebar-menu></app-sidebar-menu>
        <app-layout-main>
          <router-outlet></router-outlet>
        </app-layout-main>
      </div>

    </div>`
})
export class PageComponent implements AfterViewInit, OnInit, OnDestroy {
  // tslint:disable-next-line:no-empty
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
  }

  public ngOnInit() {
    // this.store.dispatch(this.comapnyActions.RefreshCompanies());
  }

  public ngAfterViewInit() {
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
