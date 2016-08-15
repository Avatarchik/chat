import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule, GUIModule } from './modules';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { AppComponent } from './app.component';
import { NavbarComponent, SideNavLayoutComponent, SideNavComponent } from './components';
import { appRoutes, routeProviders } from './app.routes';
import { storeProviders } from './app.store';
import { services } from './services';
import { actions } from './actions/index';
import { selectors } from './selectors/index';
import { effects } from './effects/index';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavLayoutComponent,
    SideNavComponent,
    IS_DEV ? StoreLogMonitorComponent : []
  ],
  imports: [
    BrowserModule,
    CoreModule,
    GUIModule,
    appRoutes,
  ],
  providers: [
    routeProviders,
    storeProviders,
    services,
    actions,
    selectors,
    effects
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
