import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { User } from '../interfaces';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';


@Injectable()
export class UserService {

  private url = this.configService.apiUrl + '/users/';

  constructor(private http: Http,
              private configService: ConfigService) {

  }

  login() {

  }

  signup(credentials): Observable<User> {
    let body = JSON.stringify(credentials);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http
      .post(this.url + 'signup', body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(err: any) {
    const errMsg = err.message
      ? err.message
      : err.status ? `${err.status} - ${err.statusText}` : 'Server error';

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
