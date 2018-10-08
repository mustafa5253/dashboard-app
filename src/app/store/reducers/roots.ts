import { ActionReducerMap, MetaReducer } from '@ngrx/store';


import * as fromDashboard from './dashboard.reducer';
import * as fromDirectory from './directory.reducer';

import { environment } from '../../../environments/environment';

export interface AppState {
    dashboard: fromDashboard.DashboardState;
    directory: fromDirectory.DirectoryState;
}

export const reducers: ActionReducerMap<AppState> = {
    dashboard: fromDashboard.DashboardReducer,
    directory: fromDirectory.DirectoryReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
