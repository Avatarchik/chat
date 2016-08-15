import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordPage } from '../../pages/auth/reset-password/reset-password.page';

const routes: Routes = [
  {path: '', component: ResetPasswordPage}
];

export const resetPasswordPageRoutes = RouterModule.forChild(routes);
