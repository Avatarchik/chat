import { RouterModule, Routes } from '@angular/router';
import { _404Page } from '../pages/404/404.page';

const routes: Routes = [
  {path: '', component: _404Page}
];

export const _404PageRoutes = RouterModule.forChild(routes);
