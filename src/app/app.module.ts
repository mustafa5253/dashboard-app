import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { PageComponent } from './page.component';
import { ActionModule } from './store/effects/effect.module';
import { ServiceModule } from './services/services.module';
import { ServiceConfig } from './services/service.config';
import { HttpClientModule } from '@angular/common/http';
import { metaReducers } from './store/reducers/roots';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    SharedModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    ActionModule.forRoot(),
    ServiceModule.forRoot(),
    HttpClientModule,
    // BsDropdownModule.forRoot(),
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  {
    provide: ServiceConfig,
    useValue: { apiUrl: '' }
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
