import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../pages/login/login.page';

const routes: Routes = [
  {path: '', component: LoginPage}
];

export const loginPageRoutes = RouterModule.forChild(routes);
