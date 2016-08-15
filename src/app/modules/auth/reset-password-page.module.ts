import { NgModule } from '@angular/core';
import { CoreModule } from '../';
import { ResetPasswordPage } from '../../pages';
import { resetPasswordPageRoutes } from '../../routes'
import { ResetPasswordFormComponent } from '../../components'

@NgModule({
  declarations: [
    ResetPasswordPage,
    ResetPasswordFormComponent
  ],
  imports: [
    CoreModule,
    resetPasswordPageRoutes
  ]
})
export class ResetPasswordPageModule {
}

