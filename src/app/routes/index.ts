import { homePageRoutes } from './home-page.routes';
import { _404PageRoutes } from './404-page.routes';
import { loginPageRoutes } from './auth/login-page.routes.ts';
import { signupPageRoutes } from './auth/signup-page.routes.ts';
import { forgotPasswordPageRoutes } from './auth/forgot-password-page.routes.ts';
import { resetPasswordPageRoutes } from './auth/reset-password-page.routes.ts';
// $1

export {
  homePageRoutes,
  _404PageRoutes,
  loginPageRoutes,
  signupPageRoutes,
  forgotPasswordPageRoutes,
  resetPasswordPageRoutes,
// $2
}

export const routes = [
  homePageRoutes,
  _404PageRoutes,
  loginPageRoutes,
  signupPageRoutes,
  forgotPasswordPageRoutes,
  resetPasswordPageRoutes,
// $3
];
