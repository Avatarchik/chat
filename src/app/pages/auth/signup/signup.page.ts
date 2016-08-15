/* tslint:disable component-class-suffix */
import { Component } from '@angular/core';
import { UserService } from '../../../services';

@Component({
  selector: 'signup-page',
  template: `
    <signup-form></signup-form>
  `,
  styleUrls: ['./signup.page.scss']
})
export class SignupPage {
  constructor(userService: UserService) {
    console.log(userService.getAsd());
  }
}
