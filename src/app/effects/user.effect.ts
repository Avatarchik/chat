/* tslint:disable member-ordering */
import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { UserActions } from '../actions';
import { UserService } from '../services';

@Injectable()
export class UserEffects {
  constructor(private updates$: StateUpdates<any>,
              private userActions: UserActions,
              private userService: UserService) {
  }

  @Effect() someEffect$2 = this.updates$
    .whenAction('[DummyEffects]')
    .do(params => console.log(params));
}

