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
