import { NgModule } from '@angular/core';
import { CoreModule, GUIModule } from '../modules';
import { HomePage } from '../pages';
import { homePageRoutes } from '../routes'


@NgModule({
  declarations: [HomePage],
  imports: [
    CoreModule,
    GUIModule,
    homePageRoutes
  ]
})
export class HomePageModule {
}

