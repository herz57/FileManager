import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
let AuthService = class AuthService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this.apiUrl = "http://localhost:5001";
        this.registerUrl = `${this.apiUrl}/api/users`;
        this.tokenEndpoint = `${this.apiUrl}/connect/token`;
    }
    registerUser(user) {
        return this.http.post(this.registerUrl, user);
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
        return this.http.post(this.tokenEndpoint, params)
            .pipe(tap(tokens => this.storeTokens(tokens)), mapTo(true), catchError(error => {
            console.log(error.error);
            return of(false);
        }));
    }
    logoutUser() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this._router.navigate(['/login']);
    }
    getAccessToken() {
        return localStorage.getItem('access_token');
    }
    getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }
    loggedIn() {
        return !!localStorage.getItem('access_token');
    }
    storeTokens(tokens) {
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
        return this.http.post(this.tokenEndpoint, params)
            .pipe(tap((tokens) => this.storeTokens(tokens)), mapTo(true), catchError(error => {
            this._router.navigate(['/login']);
            return of(false);
        }));
    }
};
AuthService = tslib_1.__decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map