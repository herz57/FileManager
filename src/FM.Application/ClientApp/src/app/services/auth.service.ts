import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router'
import { tap, mapTo, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(public http: HttpClient,
              public _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(environment.usersEndpoint, user)
  }

  loginUser(user) {
    const params = new HttpParams({
      fromObject: {
        grant_type: 'password',
        username: user.username,
        password: user.password,
        client_id: 'Web',
        client_secret: 'secret'
      }
    });

    return this.http.post<any>(environment.tokenEndpoint, params)
      .pipe(
        tap(tokens => this.storeTokens(tokens)),
        mapTo(true));
  }

  logoutUser() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    this._router.navigate(['/login'])
  }

  getAccessToken() {
    return localStorage.getItem('access_token')
  }

  private getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  getExpireAtToken() {
    return localStorage.getItem('expiresAt')
  }

  loggedIn() {
    return !!localStorage.getItem('access_token')    
  }

  private storeTokens(tokens) {
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('refresh_token', tokens.refresh_token);
  }

  refreshToken() {
    const params = new HttpParams({
      fromObject: {
        grant_type: 'refresh_token',
        refresh_token: this.getRefreshToken(),
        client_id: 'Web',
        client_secret: 'secret'
      }
    });

    return this.http.post<any>(environment.tokenEndpoint, params)
      .pipe(
        tap((tokens) => this.storeTokens(tokens)),
        mapTo(true),
        catchError(error => {
          this.logoutUser()
          this._router.navigate(['/login'])
          return of(false);
        }));
  }
}
