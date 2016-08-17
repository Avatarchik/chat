import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';

export interface UserState {
  user: User;
  auth_token: string;
  error: {
    statusCode: number;
    error: string;
    message: string;
  }
  loggedIn: boolean;
}

export interface User {
  id: string
  username: string,
  avatar: string,
  isEmailVerified: boolean,
  admin: boolean,
  lastLogin: string
}

const initialState: UserState = {
  user: null,
  auth_token: null,
  error: null,
  loggedIn: false
};

@Injectable()
export class UserService {

  private url = this.configService.apiUrl + '/users/';
  private _state = new BehaviorSubject(initialState);
  public state = this._state.asObservable();

  constructor(private http: Http, private configService: ConfigService) {
    this.initialStuff();
  }

  initialStuff() {
    const loggedIn = !!localStorage.getItem('auth_token');

    if (loggedIn) {
      this._state.next(Object.assign({}, this._state.getValue(), {
        loggedIn: !!localStorage.getItem('auth_token')
      }));
    }
  }

  login(credentials) {
    let body = JSON.stringify(credentials);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http
      .post(this.url + 'login', body, options)
      .map(res => res.json())
      .do(res => {
        localStorage.setItem('auth_token', res.token);
        this._state.next({user: res.user, auth_token: res.token, loggedIn: true, error: null});

        return res;
      })
      .catch(res => {
        localStorage.removeItem('auth_token');
        this._state.next({user: null, auth_token: null, loggedIn: false, error: res.json()});

        return Observable.throw(res.json());
      });
  }

  logout() {
    this._state.next(initialState);
    localStorage.removeItem('auth_token');
  }

  createUser(credentials) {
    let body = JSON.stringify(credentials);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http
      .post(this.url + 'signup', body, options)
      .map(res => res.json())
      .do(res => {
        localStorage.setItem('auth_token', res.token);
        this._state.next({user: res.user, auth_token: res.token, loggedIn: true, error: null});

        return res;
      })
      .catch(res => {
        localStorage.removeItem('auth_token');
        this._state.next({user: null, auth_token: null, loggedIn: false, error: res.json()});

        return Observable.throw(res.json());
      });
  }
}
