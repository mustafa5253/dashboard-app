import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard.effect';
/**
 * Home Module
 */
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    EffectsModule.forRoot([
      DashboardEffects,
    ])
  ],
  exports: [EffectsModule]
})
export class ActionModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ActionModule,
      providers: [
        DashboardEffects
      ]
    };
  }
}
