import { CoreModule } from './core.module';
import { GUIModule } from './gui.module';
import { DataModule } from './data.module';
import { HomePageModule } from './home-page.module';
import { _404PageModule } from './404-page.module';
// $1

export {
  CoreModule,
  GUIModule,
  DataModule,
  HomePageModule,
  _404PageModule,
// $2
}

export const modules = [
  CoreModule,
  GUIModule,
  DataModule,
  HomePageModule,
  _404PageModule,
  // $3
];
