import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPage } from '../../pages';
import { signupPageRoutes } from '../../routes'
import { SignupFormComponent } from '../../components'

@NgModule({
  declarations: [
    SignupPage,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    signupPageRoutes
  ]
})
export class SignupPageModule {
}

