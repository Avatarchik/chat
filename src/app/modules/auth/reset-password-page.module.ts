import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordPage } from '../../pages';
import { resetPasswordPageRoutes } from '../../routes'
import { ResetPasswordFormComponent } from '../../components'

@NgModule({
  declarations: [
    ResetPasswordPage,
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    resetPasswordPageRoutes
  ]
})
export class ResetPasswordPageModule {
}

