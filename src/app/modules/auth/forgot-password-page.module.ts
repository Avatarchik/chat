import { NgModule } from '@angular/core';
import { CoreModule } from '../';
import { ForgotPasswordPage } from '../../pages';
import { forgotPasswordPageRoutes } from '../../routes'
import { ForgotPasswordFormComponent } from '../../components'

@NgModule({
  declarations: [
    ForgotPasswordPage,
    ForgotPasswordFormComponent
  ],
  imports: [
    CoreModule,
    forgotPasswordPageRoutes
  ]
})
export class ForgotPasswordPageModule {
}

