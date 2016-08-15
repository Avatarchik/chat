import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordPage } from '../../pages';
import { forgotPasswordPageRoutes } from '../../routes'
import { ForgotPasswordFormComponent } from '../../components'

@NgModule({
  declarations: [
    ForgotPasswordPage,
    ForgotPasswordFormComponent
  ],
  imports: [
    CommonModule,
    forgotPasswordPageRoutes
  ]
})
export class ForgotPasswordPageModule {
}

