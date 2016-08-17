import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { User } from '../interfaces';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';

const initialState = {
  user: null,
  auth_token: null,
  error: null
};

@Injectable()
export class UserService {

  private url = this.configService.apiUrl + '/users/';
  private _state = new BehaviorSubject(initialState);
  public state = this._state.asObservable();

  constructor(private http: Http,
              private configService: ConfigService) {
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
        this._state.next({ user: res.user, auth_token: res.token, error: null });

        return res;
      })
      .catch(res => {
        localStorage.removeItem('auth_token');
        this._state.next({ user: null, auth_token: null, error: res.json() });

        return Observable.throw(res.json());
      });
  }
}
