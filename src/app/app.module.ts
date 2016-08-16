import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule, GUIModule } from './modules';
import { AppComponent } from './app.component';
import { NavbarComponent, SideNavLayoutComponent, SideNavComponent } from './components';
import { appRoutes, routeProviders } from './app.routes';
import { services } from './services';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavLayoutComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    GUIModule,
    appRoutes,
  ],
  providers: [
    routeProviders,
    services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
