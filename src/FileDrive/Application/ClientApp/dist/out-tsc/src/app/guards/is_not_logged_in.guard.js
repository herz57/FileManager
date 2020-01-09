import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let IsNotLoggedInGuard = class IsNotLoggedInGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        return !this._authService.loggedIn() ? true : false;
    }
};
IsNotLoggedInGuard = tslib_1.__decorate([
    Injectable()
], IsNotLoggedInGuard);
export { IsNotLoggedInGuard };
//# sourceMappingURL=is_not_logged_in.guard.js.map