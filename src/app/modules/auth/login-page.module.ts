import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../../pages';
import { loginPageRoutes } from '../../routes'
import { LoginFormComponent } from '../../components';

@NgModule({
  declarations: [
    LoginPage,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    loginPageRoutes
  ]
})
export class LoginPageModule {
}

