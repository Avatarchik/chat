import { NgModule } from '@angular/core';
import { CoreModule, GUIModule } from '../';
import { SignupPage } from '../../pages';
import { signupPageRoutes } from '../../routes'
import { SignupFormComponent } from '../../components'

@NgModule({
  declarations: [
    SignupPage,
    SignupFormComponent
  ],
  imports: [
    CoreModule,
    GUIModule,
    signupPageRoutes
  ]
})
export class SignupPageModule {
}

