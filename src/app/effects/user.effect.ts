/* tslint:disable member-ordering */
import { Injectable } from '@angular/core';
import { UserActions } from '../actions';
import { UserService } from '../services';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class UserEffects {
  constructor(private updates$: StateUpdates<any>,
              private userActions: UserActions,
              private userService: UserService) {
  }

  @Effect() signup$ = this.updates$
    .whenAction(UserActions.SIGNUP_REQUEST)
    .map(toPayload)
    .switchMap(credentials => {
      return this.userService.signup(credentials)
        .map(res => this.userActions.signupSuccess(res))
        .catch(() => Observable.of(this.userActions.signupError(new Error('error :P'))))
    });
}

