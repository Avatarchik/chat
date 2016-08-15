import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password.page';

const routes: Routes = [
  {path: '', component: ForgotPasswordPage}
];

export const forgotPasswordPageRoutes = RouterModule.forChild(routes);
