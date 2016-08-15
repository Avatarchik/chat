import { UserActions } from '../actions';
import { User } from '../interfaces';

interface UserState {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  user: User;
  token: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  isLoggingIn: false,
  user: null,
  token: ''
};

export function userReducer(userState = initialState, action) {
  switch (action.type) {

    case UserActions.SIGNUP_REQUEST:
      return Object.assign({}, userState, {
        isLoggingIn: true
      });

    case UserActions.SIGNUP_SUCCESS:
      return Object.assign({}, userState, {
        isLoggedIn: true,
        isLoggingIn: false,
        user: action.payload.user,
        token: action.payload.token
      });

    case UserActions.SIGNUP_ERROR:
      return userState;

    default:
      return userState;

  }

}
