import { NgModule } from '@angular/core';
import { CoreModule } from '../';
import { LoginPage } from '../../pages';
import { loginPageRoutes } from '../../routes'
import { LoginFormComponent } from '../../components';

@NgModule({
  declarations: [
    LoginPage,
    LoginFormComponent
  ],
  imports: [
    CoreModule,
    loginPageRoutes
  ]
})
export class LoginPageModule {
}

