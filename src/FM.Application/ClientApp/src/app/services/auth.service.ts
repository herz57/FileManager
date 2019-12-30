import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router'
import { tap, mapTo, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {

  private readonly apiUrl = "http://localhost:5001"
  private registerUrl = `${this.apiUrl}/api/users`;
  private tokenEndpoint = `${this.apiUrl}/connect/token`;

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user)
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

    return this.http.post<any>(this.tokenEndpoint, params)
      .pipe(
        tap(tokens => this.storeTokens(tokens)),
        mapTo(true),
        catchError(error => {
          console.log(error.error);
          return of(false);
        }));
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
    let expiresAt: Number = (new Date().getTime() + tokens.expires_in * 1000);
    localStorage.setItem('expiresAt', expiresAt.toString())
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

    return this.http.post<any>(this.tokenEndpoint, params)
      .pipe(
        tap((tokens) => this.storeTokens(tokens)),
        mapTo(true),
        catchError(error => {
          this._router.navigate(['/login'])
          return of(false);
        }));
  }
}
