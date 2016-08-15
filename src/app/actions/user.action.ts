/* tslint:disable member-ordering */
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../interfaces';

@Injectable()
export class UserActions {

  static SIGNUP_REQUEST = '[User] Signup request';
  signupRequest(credentials): Action {
    return { type: UserActions.SIGNUP_REQUEST, payload: credentials }
  }

  static SIGNUP_SUCCESS = '[User] Signup success';
  signupSuccess(user: User): Action {
    return { type: UserActions.SIGNUP_SUCCESS, payload: user }
  }

  static SIGNUP_ERROR = '[User] Signup error';
  signupError(error: Error): Action {
    return { type: UserActions.SIGNUP_ERROR, payload: error }
  }


  static LOGIN_REQUEST = '[User] Login request';
  loginRequest(credentials): Action {
    return { type: UserActions.LOGIN_REQUEST, payload: credentials }
  }

  static LOGIN_SUCCESS = '[User] Login success';
  loginSuccess(user: User): Action {
    return { type: UserActions.LOGIN_SUCCESS, payload: user }
  }

  static LOGIN_ERROR = '[User] Login error';
  loginError(error: Error): Action {
    return { type: UserActions.LOGIN_ERROR, payload: error }
  }

}
