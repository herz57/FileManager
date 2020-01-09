import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
let TokenInterceptorService = class TokenInterceptorService {
    constructor(authService) {
        this.authService = authService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    intercept(request, next) {
        if (this.authService.getAccessToken()) {
            request = this.addToken(request, this.authService.getAccessToken());
        }
        return next.handle(request).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
                return this.handle401Error(request, next);
            }
            else {
                return throwError(error);
            }
        }));
    }
    addToken(request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(switchMap(() => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next(this.authService.getAccessToken());
                return next.handle(this.addToken(request, this.authService.getAccessToken()));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(filter(token => token != null), take(1), switchMap(access_token => {
                return next.handle(this.addToken(request, access_token));
            }));
        }
    }
};
TokenInterceptorService = tslib_1.__decorate([
    Injectable()
], TokenInterceptorService);
export { TokenInterceptorService };
//# sourceMappingURL=token_interceptor.service.js.map