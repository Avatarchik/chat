import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  exports: [
  ]
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataModule,
      providers: [/*UserService*/]
    };
  }
}
