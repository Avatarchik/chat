import { NgModule, ModuleWithProviders } from '@angular/core';
import { ConfigService, UserService, /* $1 */ } from '../services';
import { UserActions, /* $2 */ } from '../actions';

@NgModule({
  exports: []
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataModule,
      providers: [
        ConfigService,
        UserService,
        UserActions,
// $3
      ]
    };
  }
}
