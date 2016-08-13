import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from '../pages';
import { homePageRoutes } from '../routes'


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    homePageRoutes
  ]
})
export class HomePageModule {
}

