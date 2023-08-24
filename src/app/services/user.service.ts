import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_URLS } from './appUrls';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  constructHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  async validateLogin(userDetails: any) {
    const user = await this.http
      .post(APP_URLS.USER.LOGIN, userDetails, this.constructHttpOptions());
    return user;
  }

  async register(userDetails: any) {
    const user = await this.http
      .post(APP_URLS.USER.REGISTER, userDetails, this.constructHttpOptions());
    return user;
  }

  async getCurrentUser() {
    const username = localStorage.getItem('username');
    return this.http.get(APP_URLS.USER.FIND_BY_USERNAME+username, this.constructHttpOptions());
  }
}
