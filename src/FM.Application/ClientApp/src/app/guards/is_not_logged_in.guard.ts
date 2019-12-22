import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class IsNotLoggedInGuard implements CanActivate {    

  constructor(private _authService: AuthService,
      private _router: Router) { }

  canActivate(): boolean {
    return !this._authService.loggedIn() ? true : false
  }
}
