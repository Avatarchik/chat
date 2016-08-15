/* tslint:disable component-class-suffix */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserSelectors } from '../../../selectors';

@Component({
  selector: 'signup-page',
  template: `
    <signup-form></signup-form>
  `,
  styleUrls: ['./signup.page.scss']
})
export class SignupPage {
  constructor(private store: Store<any>, private userSelectors: UserSelectors) {
    this.store
      .let(this.userSelectors.getState())
      .subscribe(val => console.log(val));
  }
}
