import { NgModule, ModuleWithProviders } from '@angular/core';
import { ConfigService, /* $1 */ } from '../services';

@NgModule({
  exports: []
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataModule,
      providers: [
        ConfigService,
        // $2
      ]
    };
  }
}
