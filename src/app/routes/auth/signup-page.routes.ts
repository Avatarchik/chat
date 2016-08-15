import { RouterModule, Routes } from '@angular/router';
import { SignupPage } from '../../pages/auth/signup/signup.page';

const routes: Routes = [
  {path: '', component: SignupPage}
];

export const signupPageRoutes = RouterModule.forChild(routes);
