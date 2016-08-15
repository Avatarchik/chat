/**
 * Do not import page modules, because of code splitting.
 */
import { CoreModule } from './core.module';
import { GUIModule } from './gui.module';
// $1

export {
  CoreModule,
  GUIModule,
// $2
}

export const modules = [
  CoreModule,
  GUIModule,
  // $3
];
