import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule, DataModule, GUIModule } from './modules';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { AppComponent } from './app.component';
import { storeProviders } from './app.store';
import { services } from './services';
import { appRoutes, routeProviders } from './app.routes';

@NgModule({
  declarations: [AppComponent, IS_DEV ? StoreLogMonitorComponent : []],
  imports: [
    BrowserModule,
    CoreModule,
    DataModule.forRoot(),
    GUIModule,
    appRoutes,
  ],
  providers: [
    routeProviders,
    storeProviders,
    services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
