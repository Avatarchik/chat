import { NgModuleFactoryLoader } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpackNgModuleLoader } from './services';

const routes/*: Routes*/ = [
  {
    path: '',
    loadChildren(compiler) {
      return System
        .import('./modules/home-page.module')
        .then(module => compiler.compileModuleAsync(module.HomePageModule));
    }
  },
  {
    path: 'auth/login',
    loadChildren(compiler) {
      return System
        .import('./modules/auth/login-page.module')
        .then(module => compiler.compileModuleAsync(module.LoginPageModule));
    }
  },
  {
    path: 'auth/signup',
    loadChildren(compiler) {
      return System
        .import('./modules/auth/signup-page.module')
        .then(module => compiler.compileModuleAsync(module.SignupPageModule));
    }
  },
  {
    path: 'auth/forgot-password',
    loadChildren(compiler) {
      return System
        .import('./modules/auth/forgot-password-page.module')
        .then(module => compiler.compileModuleAsync(module.ForgotPasswordPageModule));
    }
  },
  {
    path: 'auth/reset-password',
    loadChildren(compiler) {
      return System
        .import('./modules/auth/reset-password-page.module')
        .then(module => compiler.compileModuleAsync(module.ResetPasswordPageModule));
    }
  },
// $1
  {
    path: 'asd',
    loadChildren(compiler) {
      return System
        .import('./modules/404-page.module')
        .then(module => compiler.compileModuleAsync(module._404PageModule));
    }
  }
];

export const appRoutes = RouterModule.forRoot(routes);

export const routeProviders = [
  {provide: NgModuleFactoryLoader, useClass: WebpackNgModuleLoader}
];
