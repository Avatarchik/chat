import { NgModule } from '@angular/core';
import { CoreModule, GUIModule } from '../';
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
    GUIModule,
    loginPageRoutes
  ]
})
export class LoginPageModule {
}

