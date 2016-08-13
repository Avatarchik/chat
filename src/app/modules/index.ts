/**
 * Do not import page modules, because of code splitting.
 */
import { CoreModule } from './core.module';
import { GUIModule } from './gui.module';
import { DataModule } from './data.module';
// $1

export {
  CoreModule,
  GUIModule,
  DataModule,
// $2
}

export const modules = [
  CoreModule,
  GUIModule,
  DataModule,
  // $3
];
