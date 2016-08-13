import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.page';

const routes: Routes = [
  {path: '', component: HomePage}
];

export const homePageRoutes = RouterModule.forChild(routes);
