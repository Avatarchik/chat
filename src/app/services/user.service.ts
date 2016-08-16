import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { User } from '../interfaces';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';

const initialState = {
  user: null,
  token: null,
  error: null
};

@Injectable()
export class UserService {

  private url = this.configService.apiUrl + '/users/';
  private state$ = new BehaviorSubject(initialState);

  constructor(private http: Http,
              private configService: ConfigService) {
  }

  getState() {
    return this.state$.asObservable().cache();
  }

  setState(newState) {
    this.state$.next(newState)
  }

  signup(credentials) {
    let body = JSON.stringify(credentials);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http
      .post(this.url + 'signup', body, options)
      .map(res => res.json())
      .catch(res => Observable.throw(res.json()))
      // .subscribe(
      //   res => this.setState(Object.assign({}, this.state$.getValue(), {
      //     user: res.user,
      //     token: res.token,
      //     error: null
      //   })),
      //
      //   err => {
      //     const newState = Object.assign({}, this.state$.getValue(), {
      //       user: null,
      //       token: null,
      //       error: err.json()
      //     });
      //     this.state$.next(newState)
      //   }
      // )
  }
}
